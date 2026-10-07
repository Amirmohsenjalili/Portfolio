"use client";

import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitch({ locale }: { locale: string }) {
  const pathname = usePathname();
  const nextLocale = locale === "fa" ? "en" : "fa";
  const label = nextLocale === "fa" ? "FA" : "En";

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      hrefLang={nextLocale}
      lang={nextLocale}
      className="px-2 text-sm text-ink-muted transition-colors hover:text-ink"
    >
      {label}
    </Link>
  );
}
