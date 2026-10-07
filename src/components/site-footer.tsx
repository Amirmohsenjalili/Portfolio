import { cacheLife } from "next/cache";
import { getLocale, getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { Link } from "@/i18n/navigation";
import { formatDigits } from "@/lib/format";
import { localize } from "@/lib/locale";
import { Container } from "./container";

async function copyrightYear() {
  "use cache";
  cacheLife("weeks");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const locale = await getLocale();
  const t = await getTranslations("nav");
  const year = formatDigits(String(await copyrightYear()), locale);

  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-6 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {localize(profile.name, locale)}
          <span aria-hidden="true"> · </span>
          <span className="sr-only">, </span>
          {year}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/work" className="transition-colors hover:text-ink">
              {t("work")}
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:text-ink">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-ink">
              {t("contact")}
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-ink"
            >
              {profile.email}
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
