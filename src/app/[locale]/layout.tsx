import type { Metadata, Viewport } from "next";
import { Fraunces, Markazi_Text, Source_Sans_3, Vazirmatn } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/content/profile";
import { routing } from "@/i18n/routing";
import { localize, textDirection } from "@/lib/locale";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const persian = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-persian",
});

const persianDisplay = Markazi_Text({
  subsets: ["arabic", "latin"],
  weight: "500",
  display: "swap",
  variable: "--font-persian-display",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eee6" },
    { media: "(prefers-color-scheme: dark)", color: "#161311" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s · ${t("name")}`,
    },
    description: t("description"),
    openGraph: {
      siteName: t("name"),
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations("nav");
  const theme = await getTranslations("theme");

  return (
    <html
      lang={locale}
      dir={textDirection(locale)}
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${persian.variable} ${locale === "fa" ? persianDisplay.variable : ""} h-full`}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <a className="skip-link" href="#content">
              {t("skip")}
            </a>
            <SiteHeader
              name={localize(profile.name, locale)}
              locale={locale}
              navLabel={t("primary")}
              menuLabel={t("menu")}
              closeLabel={t("close")}
              themeLabel={theme("label")}
              items={[
                { href: "/work", label: t("work") },
                { href: "/about", label: t("about") },
                { href: "/contact", label: t("contact") },
              ]}
            />
            <main id="content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
