import type { Locale } from "@/i18n/routing";

export const profile = {
  name: { en: "Amir Mohsen Jalili", fa: "امیرمحسن جلیلی" },
  role: { en: "Frontend Developer", fa: "توسعه‌دهنده‌ی فرانت‌اند" },
  location: { en: "Tehran", fa: "تهران" },
  availability: {
    en: "Frontend developer at Snapp Market.",
    fa: "توسعه‌دهنده‌ی فرانت‌اند در اسنپ‌مارکت.",
  },
  email: "amirmohsen.jalili2016@gmail.com",
  phone: {
    href: "tel:+989366714884",
    label: { en: "+98 936 671 4884", fa: "۰۹۳۶ ۶۷۱ ۴۸۸۴" },
  },
  links: [
    { label: "GitHub", href: "https://github.com/Amirmohsenjalili" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amir-mohsen-jalili-b26413268",
    },
  ],
  summary: {
    en: "Frontend developer at Snapp Market in Tehran. I work on the shopping interface, and on keeping it clear as the product grows.",
    fa: "توسعه‌دهنده‌ی فرانت‌اند در اسنپ‌مارکت، تهران. روی رابط خرید کار می‌کنم، و روی اینکه با بزرگ شدن محصول همچنان خوانا بماند.",
  },
  about: {
    en: [
      "I am a frontend developer at Snapp Market in Tehran. I have been on the product since 2023.",
      "Most of the work is the shopping interface: screens that have to stay clear on a phone, and code that the next change does not have to fight.",
    ],
    fa: [
      "توسعه‌دهنده‌ی فرانت‌اند در اسنپ‌مارکت هستم، در تهران، و از ۲۰۲۳ روی همین محصول کار می‌کنم.",
      "بیشتر کار، رابط خرید است: صفحه‌هایی که روی موبایل باید خوانا بمانند، و کدی که تغییر بعدی مجبور نباشد با آن بجنگد.",
    ],
  },
} satisfies {
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  location: Record<Locale, string>;
  availability: Record<Locale, string>;
  email: string;
  phone: { href: string; label: Record<Locale, string> };
  links: { label: string; href: string }[];
  summary: Record<Locale, string>;
  about: Record<Locale, string[]>;
};
