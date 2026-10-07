import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  let resolved = locale;

  if (!resolved) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      resolved = paramValue;
    } else {
      notFound();
    }
  }

  return {
    locale: resolved,
    messages: await loadMessages(resolved),
  };
});

async function loadMessages(locale: string) {
  switch (locale) {
    case "fa":
      return (await import("../messages/fa.json")).default;
    default:
      return (await import("../messages/en.json")).default;
  }
}
