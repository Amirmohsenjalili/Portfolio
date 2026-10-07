import type { Locale } from "@/i18n/routing";

export type Localized<T> = Record<Locale, T>;

export type Decision = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  year: string;
  kind: "work" | "personal";
  href?: string;
  title: Localized<string>;
  summary: Localized<string>;
  context: Localized<string>;
  role: Localized<string>;
  constraints: Localized<string[]>;
  decisions: Localized<Decision[]>;
  outcome: Localized<string[]>;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "snapp-market",
    year: "2023",
    kind: "work",
    title: { en: "Snapp Market", fa: "اسنپ‌مارکت" },
    summary: {
      en: "The grocery product I have been building as a frontend developer since 2023.",
      fa: "محصول خواربارفروشی که از ۲۰۲۳ به‌عنوان توسعه‌دهنده‌ی فرانت‌اند روی آن کار می‌کنم.",
    },
    context: {
      en: "Snapp Market is where people shop for groceries. The interface has to stay clear on a phone, while the product itself keeps changing.",
      fa: "اسنپ‌مارکت جایی است که آدم‌ها خواربار می‌خرند. رابط باید روی موبایل خوانا بماند، در حالی که خود محصول مدام عوض می‌شود.",
    },
    role: {
      en: "Frontend developer, Tehran, since 2023.",
      fa: "توسعه‌دهنده‌ی فرانت‌اند، تهران، از ۲۰۲۳.",
    },
    constraints: {
      en: [
        "Most of the shopping happens on a phone.",
        "New product work ships while the existing screens stay in use.",
        "The goods have to stay more visible than the chrome around them.",
      ],
      fa: [
        "بیشتر خرید روی موبایل اتفاق می‌افتد.",
        "کار جدید محصول منتشر می‌شود، در حالی که صفحه‌های قبلی هنوز در استفاده‌اند.",
        "کالا باید از کروم دورش دیده‌تر بماند.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Phone first",
          body: "The path through a shop has to be readable in one hand. Type, spacing, and the next action stay obvious before anything decorative.",
        },
        {
          title: "One pattern, many screens",
          body: "A shopping product grows by adding screens. I try to extend a pattern that already exists instead of inventing a new one for each feature.",
        },
        {
          title: "Keep the interface quiet",
          body: "The page is there so someone can choose food. When the UI gets louder than the product, it is in the way.",
        },
      ],
      fa: [
        {
          title: "اول موبایل",
          body: "مسیر خرید باید با یک دست خوانا باشد. حروف، فاصله و اقدام بعدی، قبل از هر تزئینی، روشن می‌مانند.",
        },
        {
          title: "یک الگو، صفحه‌های زیاد",
          body: "محصول خرید با اضافه شدن صفحه بزرگ می‌شود. سعی می‌کنم الگویی را که هست گسترش بدهم، نه اینکه برای هر قابلیت یکی از نو بسازم.",
        },
        {
          title: "رابط آرام",
          body: "صفحه برای این است که کسی غذا انتخاب کند. وقتی رابط از خود محصول بلندتر شود، سر راه است.",
        },
      ],
    },
    outcome: {
      en: [
        "I have been on the shopping interface since 2023.",
        "The day-to-day work is product UI: screens people actually use to order.",
        "Public numbers are not mine to publish, so this page stays with the work itself.",
      ],
      fa: [
        "از ۲۰۲۳ روی رابط خرید هستم.",
        "کار روزمره، رابط محصول است: صفحه‌هایی که آدم‌ها واقعاً با آن‌ها سفارش می‌دهند.",
        "عدد عمومی مال من نیست که منتشر کنم، برای همین این صفحه روی خود کار می‌ماند.",
      ],
    },
    stack: ["JavaScript", "React", "CSS"],
  },
  {
    slug: "divar",
    year: "2023",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/Divar-react",
    title: { en: "Divar", fa: "دیوار" },
    summary: {
      en: "A personal React client for a classifieds-style feed, with long lists and a Redux store.",
      fa: "یک کلاینت شخصی با ری‌اکت برای فید آگهی، با فهرست‌های بلند و استور ریداکس.",
    },
    context: {
      en: "I rebuilt the shape of a classifieds product as a practice in real interface problems: a feed that gets long, photos, and state that more than one screen needs.",
      fa: "شکل یک محصول آگهی را به‌عنوان تمرین مسئله‌های واقعی رابط دوباره ساختم: فیدی که بلند می‌شود، عکس، و وضعیتی که بیش از یک صفحه به آن نیاز دارد.",
    },
    role: {
      en: "I designed and built the client.",
      fa: "کلاینت را طراحی و پیاده‌سازی کردم.",
    },
    constraints: {
      en: [
        "A feed of listings is too long to render all at once.",
        "Several screens need the same listing state.",
        "Photos have to move without taking over the page.",
      ],
      fa: [
        "فید آگهی آن‌قدر بلند است که نمی‌شود یک‌جا رندر کرد.",
        "چند صفحه به وضعیت یکسان آگهی نیاز دارند.",
        "عکس باید حرکت کند، بدون اینکه صفحه را تصرف کند.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Window the list",
          body: "react-window renders the rows that are on screen. The feed can grow without mounting every card.",
        },
        {
          title: "Redux for shared state",
          body: "Listing data lives in a Redux store, so the feed and the screens around it read the same source.",
        },
        {
          title: "Tailwind for the surface",
          body: "Layout and spacing sit in Tailwind, with Sass where a component needed more than utilities.",
        },
      ],
      fa: [
        {
          title: "فهرست پنجره‌ای",
          body: "react-window فقط ردیف‌های روی صفحه را رندر می‌کند. فید می‌تواند بلند شود بدون اینکه همه‌ی کارت‌ها سوار شوند.",
        },
        {
          title: "ریداکس برای وضعیت مشترک",
          body: "داده‌ی آگهی در استور ریداکس است تا فید و صفحه‌های اطرافش از یک منبع بخوانند.",
        },
        {
          title: "تیلویند برای سطح",
          body: "چیدمان و فاصله با تیلویند است، و Sass جایی که کامپوننت بیشتر از utility لازم داشت.",
        },
      ],
    },
    outcome: {
      en: [
        "A classifieds client with routing, a store, and a virtualized feed.",
        "Galleries use Swiper, and requests go through Axios.",
        "The repo is public on GitHub.",
      ],
      fa: [
        "یک کلاینت آگهی با مسیریابی، استور، و فید مجازی‌شده.",
        "گالری با Swiper است و درخواست‌ها از Axios می‌گذرند.",
        "ریپو روی گیت‌هاب عمومی است.",
      ],
    },
    stack: ["React", "Redux", "Tailwind", "Sass"],
  },
  {
    slug: "list-of-users",
    year: "2023",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/List-of-users",
    title: { en: "List of users", fa: "فهرست کاربرها" },
    summary: {
      en: "A TypeScript app for browsing people: a data grid, server state, and forms that validate.",
      fa: "یک اپ تایپ‌اسکریپت برای دیدن آدم‌ها: گرید داده، وضعیت سرور، و فرم‌هایی که اعتبارسنجی می‌شوند.",
    },
    context: {
      en: "I wanted a small product surface that was more than a list of cards: tables, loading, and forms with rules.",
      fa: "یک سطح کوچک محصول می‌خواستم که فقط چند کارت نباشد: جدول، بارگذاری، و فرم با قاعده.",
    },
    role: {
      en: "I built the app in TypeScript.",
      fa: "اپ را با تایپ‌اسکریپت ساختم.",
    },
    constraints: {
      en: [
        "The list is tabular, not a stack of cards.",
        "Server data should not live in the same place as form state.",
        "Invalid input has to be caught before it is sent.",
      ],
      fa: [
        "فهرست جدولی است، نه پشته‌ای از کارت.",
        "داده‌ی سرور نباید همان‌جایی باشد که وضعیت فرم است.",
        "ورودی نامعتبر باید قبل از ارسال گرفته شود.",
      ],
    },
    decisions: {
      en: [
        {
          title: "MUI for the grid",
          body: "The data grid is MUI. The visual system is the library’s, so the time went into the data and the forms.",
        },
        {
          title: "React Query for the server",
          body: "Fetching and caching sit in React Query. The screen reads the query instead of copying the response into local state.",
        },
        {
          title: "Forms with Zod",
          body: "React Hook Form plus Zod describes what a valid person looks like, and the form follows that schema.",
        },
      ],
      fa: [
        {
          title: "گرید با MUI",
          body: "گرید داده MUI است. سیستم بصری مال کتابخانه است، تا وقت روی داده و فرم برود.",
        },
        {
          title: "ری‌اکت کوئری برای سرور",
          body: "گرفتن و کش در React Query است. صفحه کوئری را می‌خواند، به‌جای اینکه پاسخ را در وضعیت محلی کپی کند.",
        },
        {
          title: "فرم با Zod",
          body: "React Hook Form به‌همراه Zod می‌گوید یک کاربر معتبر چه شکلی است، و فرم از همان اسکیما پیروی می‌کند.",
        },
      ],
    },
    outcome: {
      en: [
        "A typed user list with a grid, queries, and validated forms.",
        "Jotai is there for the small bits of client state that are not the server.",
        "The repo is public on GitHub.",
      ],
      fa: [
        "یک فهرست تایپ‌شده با گرید، کوئری، و فرم معتبر.",
        "Jotai برای تکه‌های کوچک وضعیت کلاینت است که سرور نیستند.",
        "ریپو روی گیت‌هاب عمومی است.",
      ],
    },
    stack: ["TypeScript", "React", "MUI", "Zod"],
  },
  {
    slug: "vertaflower",
    year: "2023",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/VertaFlower-React",
    title: { en: "Verta Flower", fa: "ورتا فلاور" },
    summary: {
      en: "A React storefront for a flower shop, with routing and requests of its own.",
      fa: "یک ویترین ری‌اکت برای گلفروشی، با مسیریابی و درخواست‌های خودش.",
    },
    context: {
      en: "A shop needs more than a landing page: a way through the products, and a client that can ask for them.",
      fa: "فروشگاه بیشتر از یک لندینگ می‌خواهد: راهی میان محصول‌ها، و کلاینتی که بتواند آن‌ها را بخواهد.",
    },
    role: {
      en: "I set the site up in React.",
      fa: "سایت را با ری‌اکت بالا آوردم.",
    },
    constraints: {
      en: [
        "Products and pages have to be separate routes.",
        "The catalog comes from requests, not a hardcoded list.",
        "The page still has to read as a shop, not a dashboard.",
      ],
      fa: [
        "محصول و صفحه باید مسیر جدا داشته باشند.",
        "کاتالوگ از درخواست می‌آید، نه یک فهرست ثابت در کد.",
        "صفحه باید فروشگاه خوانده شود، نه داشبورد.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Routes for the shop",
          body: "React Router splits the storefront into pages, so a product is an address and not a state flag.",
        },
        {
          title: "Axios for the catalog",
          body: "Product data is requested. The screen waits on that response instead of shipping a frozen list.",
        },
      ],
      fa: [
        {
          title: "مسیر برای فروشگاه",
          body: "React Router ویترین را به صفحه تقسیم می‌کند تا محصول یک آدرس باشد، نه یک پرچم وضعیت.",
        },
        {
          title: "Axios برای کاتالوگ",
          body: "داده‌ی محصول درخواست می‌شود. صفحه منتظر همان پاسخ می‌ماند، به‌جای یک فهرست منجمد.",
        },
      ],
    },
    outcome: {
      en: [
        "A small shop with its own routes and client.",
        "The repo is public on GitHub.",
      ],
      fa: [
        "یک فروشگاه کوچک با مسیر و کلاینت خودش.",
        "ریپو روی گیت‌هاب عمومی است.",
      ],
    },
    stack: ["React", "React Router", "Axios"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
