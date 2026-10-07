import type { Locale } from "@/i18n/routing";

export function textDirection(locale: string): "rtl" | "ltr" {
  return locale === "fa" ? "rtl" : "ltr";
}

export function localize<T>(value: Record<Locale, T>, locale: string): T {
  return locale === "fa" ? value.fa : value.en;
}
