import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { PhotoWash } from "@/components/photo-wash";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";
import { localize } from "@/lib/locale";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("lead"),
    alternates: alternatesFor("/contact", locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const name = localize(profile.name, locale);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <PhotoWash />
      </div>
      <Container className="relative py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal immediate className="order-2 min-w-0 md:order-1 md:col-span-7">
            <h1 className="font-serif text-5xl text-ink md:text-7xl">{t("title")}</h1>
            <p className="text-measure mt-6 text-lg text-ink-muted">{t("lead")}</p>
            <p className="mt-10">
              <a
                href={`mailto:${profile.email}`}
                className="font-serif text-xl leading-tight text-ink underline decoration-accent/30 underline-offset-[0.18em] transition-colors hover:decoration-accent sm:text-3xl"
              >
                {profile.email}
              </a>
            </p>
            <p className="mt-6">
              <a
                href={profile.phone.href}
                dir="ltr"
                className="inline-block font-serif text-3xl text-ink underline decoration-accent/30 underline-offset-8 transition-colors hover:decoration-accent"
              >
                {localize(profile.phone.label, locale)}
              </a>
            </p>
            <p className="mt-8 text-sm text-ink">
              {localize(profile.availability, locale)}
            </p>
            <h2 className="mt-12 text-xs tracking-[0.18em] text-ink-muted uppercase">
              {t("elsewhere")}
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-ink underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="relative z-10 order-1 md:order-2 md:col-span-5">
            <div className="overflow-hidden border border-line bg-bg-raised">
              <Portrait
                alt={name}
                priority
                className="aspect-square"
                sizes="(min-width: 768px) 36vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
