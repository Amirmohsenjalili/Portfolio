import type { Locale } from "@/i18n/routing";

export const principles: {
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}[] = [
  {
    title: { en: "Constraints first", fa: "اول محدودیت" },
    body: {
      en: "The useful design is the one that survives the real limit: a slow API, two languages, a team that ships every week.",
      fa: "طراحی به‌دردبخور همان است که از محدودیت واقعی جان به در می‌برد: API کند، دو زبان، تیمی که هر هفته منتشر می‌کند.",
    },
  },
  {
    title: { en: "A system you can see", fa: "سیستمی که دیده شود" },
    body: {
      en: "Tokens, components, and patterns should be legible to the next person, not only to the one who made the file.",
      fa: "توکن، کامپوننت و الگو باید برای نفر بعدی خوانا باشند، نه فقط برای کسی که فایل را ساخته.",
    },
  },
  {
    title: { en: "A quiet interface", fa: "رابط آرام" },
    body: {
      en: "When the details are right, the page does not have to raise its voice.",
      fa: "وقتی جزئیات درست باشد، صفحه لازم نیست صدایش را بلند کند.",
    },
  },
];
