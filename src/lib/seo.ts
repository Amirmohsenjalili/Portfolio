import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function alternatesFor(
  href: string,
  locale: string,
): Metadata["alternates"] {
  const languages = Object.fromEntries(
    routing.locales.map((entry) => [
      entry,
      getPathname({ locale: entry, href }),
    ]),
  );

  return {
    canonical: getPathname({ locale, href }),
    languages: {
      ...languages,
      "x-default": getPathname({ locale: routing.defaultLocale, href }),
    },
  };
}
