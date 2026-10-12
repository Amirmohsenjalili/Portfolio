import type { Locale } from "@/i18n/routing";

export const profile = {
  name: { en: "Amir Mohsen Jalili", fa: "امیرمحسن جلیلی" },
  role: { en: "Senior Software Engineer", fa: "مهندس نرم‌افزار ارشد" },
  location: { en: "Tehran", fa: "تهران" },
  availability: {
    en: "Senior software engineer at Snapp Market.",
    fa: "مهندس نرم‌افزار ارشد در اسنپ‌مارکت.",
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
    en: "Senior software engineer at Snapp Market in Tehran. I build the operations panel the grocery business runs on: vendors, inventory, and the requests in between.",
    fa: "مهندس نرم‌افزار ارشد در اسنپ‌مارکت، تهران. پنل عملیاتی را می‌سازم که کسب‌وکار خواربار با آن کار می‌کند: فروشنده‌ها، موجودی، و درخواست‌های میان این دو.",
  },
  about: {
    en: [
      "I am a senior software engineer at Snapp Market in Tehran. I have been on the operations panel since 2023.",
      "The panel is where the market is run: chain stores and vendors, warehouses and products, purchase orders, transfers, and who is allowed to change them. Those screens stay in use while the next change ships.",
    ],
    fa: [
      "مهندس نرم‌افزار ارشد در اسنپ‌مارکت هستم، در تهران، و از ۲۰۲۳ روی پنل عملیات همین محصول کار می‌کنم.",
      "پنل جایی است که بازار از آنجا اداره می‌شود: فروشگاه‌های زنجیره‌ای و فروشنده‌ها، انبار و کالا، سفارش خرید، انتقال، و اینکه چه کسی اجازه‌ی تغییرشان را دارد. این صفحه‌ها در استفاده‌اند، در حالی که تغییر بعدی منتشر می‌شود.",
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
