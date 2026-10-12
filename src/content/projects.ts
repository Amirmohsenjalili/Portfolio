import type { Locale } from "@/i18n/routing";
import { competencies, type Competency } from "@/content/skills";

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
  competencies?: Competency[];
};

export const projects: Project[] = [
  {
    slug: "snapp-market",
    year: "2023",
    kind: "work",
    title: { en: "Snapp Market", fa: "اسنپ‌مارکت" },
    summary: {
      en: "The operations panel for Snapp Market. I have been building it since 2023.",
      fa: "پنل عملیات اسنپ‌مارکت. از ۲۰۲۳ آن را می‌سازم.",
    },
    context: {
      en: "Snapp Market sells groceries. The panel is how that business is run: vendors and chain stores, warehouses and stock, products, purchase orders and transfers, price gaps, returns, and the people allowed to change them. The screens stay in use while the next change ships.",
      fa: "اسنپ‌مارکت خواربار می‌فروشد. پنل همان جایی است که این کسب‌وکار اداره می‌شود: فروشنده و فروشگاه زنجیره‌ای، انبار و موجودی، کالا، سفارش خرید و انتقال، اختلاف قیمت، مرجوعی، و آدم‌هایی که اجازه‌ی تغییرشان را دارند. صفحه‌ها در استفاده‌اند، در حالی که تغییر بعدی منتشر می‌شود.",
    },
    role: {
      en: "Senior software engineer, Tehran, since 2023.",
      fa: "مهندس نرم‌افزار ارشد، تهران، از ۲۰۲۳.",
    },
    constraints: {
      en: [
        "Operators work in Persian, right to left, with Jalali dates.",
        "A write on this panel can change stock, a price, or a vendor.",
        "Each action has its own permission. Changing a warehouse requires that grant.",
        "New work ships into modules that are already in production.",
      ],
      fa: [
        "اپراتور فارسی کار می‌کند، راست به چپ، با تاریخ جلالی.",
        "یک ثبت در این پنل می‌تواند موجودی، قیمت، یا یک فروشنده را عوض کند.",
        "هر عمل دسترسی خودش را دارد. تغییر انبار همان مجوز را می‌خواهد.",
        "کار جدید داخل ماژول‌هایی منتشر می‌شود که از قبل در تولیدند.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Code Craftsmanship",
          body: "The panel is TypeScript. A form is React Hook Form plus a Zod schema, so a bad payload is caught before it is sent. A new screen extends the module it belongs to, vendors or inventory or requests, instead of a one-off page.",
        },
        {
          title: "Testing & Quality Assurance",
          body: "Quality on this panel is the check before the write. The schema has to accept the form, and the permission has to allow the action. The operator should see a failure before it becomes stock or a price.",
        },
        {
          title: "Database & API Design",
          body: "Each domain has a client generated from its service schema. Orval turns that contract into React Query hooks and models. When the contract changes, the models and the screen change with it. My side is what the panel reads and what it is allowed to send.",
        },
        {
          title: "Security & Compliance",
          body: "Sign-in is a one-time code. Permissions sit on the route and on the action. Seeing a vendor, a chain, or a warehouse is a grant.",
        },
        {
          title: "Reliability & Operations",
          body: "These screens are how stock, price, and orders get confirmed. A failed write has to be visible to the operator. The client reports errors to Sentry.",
        },
        {
          title: "Software Architecture & Design",
          body: "Inventory, vendors, requests, users, and finance are separate modules on one router. Shared layout and form pieces sit under them, so a flow in one domain does not reinvent the shell.",
        },
        {
          title: "Technical Planning & Execution",
          body: "The panel stays in production while the next slice ships: chain stores, product management, bulk confirm, purchase orders. The plan is the next change to a screen people are already using.",
        },
        {
          title: "AI Literacy & Application",
          body: "I use AI tools to move through this codebase: finding the module, drafting the change, and checking it against the screen already in production. The change that merges is still reviewed.",
        },
        {
          title: "DevOps & Infrastructure Management",
          body: "The panel is built and released with the team's pipeline. My part of that flow is the application the pipeline ships.",
        },
      ],
      fa: [
        {
          title: "مهارت ساخت کد",
          body: "پنل با تایپ‌اسکریپت است. فرم، React Hook Form به‌همراه اسکیمای Zod است تا بدنه‌ی نادرست قبل از ارسال گرفته شود. صفحه‌ی جدید ماژول خودش را گسترش می‌دهد، فروشنده یا موجودی یا درخواست، نه یک صفحه‌ی یک‌بارمصرف.",
        },
        {
          title: "تست و تضمین کیفیت",
          body: "کیفیت در این پنل، بررسی قبل از ثبت است. اسکیما باید فرم را بپذیرد، و دسترسی باید عمل را اجازه بدهد. اپراتور باید خطا را ببیند، قبل از اینکه موجودی یا قیمت شود.",
        },
        {
          title: "طراحی پایگاه‌داده و API",
          body: "هر دامنه کلاینتی دارد که از اسکیمای سرویسش ساخته شده. Orval آن قرارداد را به هوک React Query و مدل تبدیل می‌کند. وقتی قرارداد عوض شود، مدل و صفحه با آن عوض می‌شوند. سهم من چیزی است که پنل می‌خواند و چیزی که اجازه‌ی فرستادنش را دارد.",
        },
        {
          title: "امنیت و انطباق",
          body: "ورود با رمز یک‌بارمصرف است. دسترسی روی مسیر و روی عمل نشسته. دیدن یک فروشنده، یک زنجیره، یا یک انبار یک مجوز است.",
        },
        {
          title: "پایداری و عملیات",
          body: "این صفحه‌ها جایی‌اند که موجودی، قیمت و سفارش تأیید می‌شوند. ثبت ناموفق باید برای اپراتور دیده شود. کلاینت خطاها را به Sentry می‌فرستد.",
        },
        {
          title: "معماری و طراحی نرم‌افزار",
          body: "موجودی، فروشنده‌ها، درخواست‌ها، کاربرها و مالی ماژول‌های جدا روی یک مسیریاب‌اند. چیدمان و قطعه‌های فرم زیر آن‌ها نشسته‌اند تا یک جریان در یک دامنه، پوسته‌ی پنل را از نو نسازد.",
        },
        {
          title: "برنامه‌ریزی و اجرای فنی",
          body: "پنل در تولید می‌ماند، در حالی که برش بعدی منتشر می‌شود: فروشگاه‌های زنجیره‌ای، مدیریت کالا، تأیید گروهی، سفارش خرید. برنامه، تغییر بعدیِ صفحه‌ای است که آدم‌ها از قبل با آن کار می‌کنند.",
        },
        {
          title: "سواد و کاربرد هوش مصنوعی",
          body: "برای حرکت در این کد از ابزار هوش مصنوعی استفاده می‌کنم: پیدا کردن ماژول، پیش‌نویس تغییر، و سنجیدنش با صفحه‌ای که در تولید است. تغییری که ادغام می‌شود همچنان بازبینی می‌شود.",
        },
        {
          title: "مدیریت دوآپس و زیرساخت",
          body: "پنل با خط لوله‌ی تیم ساخته و منتشر می‌شود. سهم من در این جریان، اپلیکیشنی است که خط لوله منتشر می‌کند.",
        },
      ],
    },
    outcome: {
      en: [
        "I have been on the operations panel since 2023.",
        "The day-to-day work is the panel operators use: vendors, inventory, requests, and permissions.",
        "Public numbers are not mine to publish, so this page stays with the work itself.",
      ],
      fa: [
        "از ۲۰۲۳ روی پنل عملیات هستم.",
        "کار روزمره همان پنلی است که اپراتور با آن کار می‌کند: فروشنده، موجودی، درخواست، و دسترسی.",
        "عدد عمومی مال من نیست که منتشر کنم، برای همین این صفحه روی خود کار می‌ماند.",
      ],
    },
    stack: ["TypeScript", "React", "MUI", "React Query"],
    competencies,
  },
  {
    slug: "divar",
    year: "2026",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/Divar-react",
    title: { en: "Divar", fa: "دیوار" },
    summary: {
      en: "A Tehran classifieds client. Listings come from Divar's public API, and the app has no backend of its own.",
      fa: "یک کلاینت آگهی برای تهران. آگهی‌ها از API عمومی دیوار می‌آیند و اپ بک‌اند جدا ندارد.",
    },
    context: {
      en: "I rebuilt a classifieds feed in the shape of Divar: categories, a list that continues, and a post page. The data is Divar's. The client has to ask for it and keep the page readable.",
      fa: "یک فید آگهی را به شکل دیوار دوباره ساختم: دسته‌ها، فهرستی که ادامه دارد، و صفحه‌ی آگهی. داده مال دیوار است. کلاینت باید آن را بخواهد و صفحه را خوانا نگه دارد.",
    },
    role: {
      en: "I designed and built the client.",
      fa: "کلاینت را طراحی و پیاده‌سازی کردم.",
    },
    constraints: {
      en: [
        "The browser cannot call Divar's API on its own.",
        "The feed is longer than one response, and it keeps going.",
        "Category and search belong to the request. Place, price, and photos can be decided from posts already on the page.",
      ],
      fa: [
        "مرورگر خودش نمی‌تواند API دیوار را صدا بزند.",
        "فید از یک پاسخ بلندتر است و ادامه دارد.",
        "دسته و جستجو مال درخواست‌اند. محل، قیمت و عکس را می‌شود از آگهی‌هایی که روی صفحه هستند تصمیم گرفت.",
      ],
    },
    decisions: {
      en: [
        {
          title: "A proxy, not a backend",
          body: "Search and post detail go to /api. Vite forwards that path in development. nginx or a Cloudflare Worker does it in production. The client never holds a Divar URL.",
        },
        {
          title: "One query cache",
          body: "RTK Query owns search and the post. Divar's widget payload becomes a card, or a title, a gallery, and a description, before a screen reads it.",
        },
        {
          title: "Scroll, then narrow what is here",
          body: "An intersection observer asks for the next page and appends it, skipping tokens already shown. Place, price, and photo-only then narrow that list. They do not start a new request.",
        },
      ],
      fa: [
        {
          title: "پروکسی، نه بک‌اند",
          body: "جستجو و جزئیات آگهی به /api می‌روند. Vite این مسیر را در توسعه جلو می‌برد. در انتشار، nginx یا یک Cloudflare Worker. کلاینت هیچ‌وقت آدرس دیوار را پیش خودش ندارد.",
        },
        {
          title: "یک کش برای کوئری",
          body: "RTK Query صاحب جستجو و آگهی است. بدنه‌ی ویجت دیوار، قبل از اینکه صفحه‌ای آن را بخواند، به یک کارت تبدیل می‌شود، یا به عنوان، گالری و توضیح.",
        },
        {
          title: "اسکرول، بعد تنگ کردن همین‌ها",
          body: "یک intersection observer صفحه‌ی بعد را می‌خواهد و به فهرست اضافه می‌کند، و توکن‌هایی را که آمده‌اند رد می‌کند. بعد محل، قیمت و فقط عکس‌دار همان فهرست را تنگ می‌کنند. درخواست تازه نمی‌زنند.",
        },
      ],
    },
    outcome: {
      en: [
        "A Tehran feed with categories, search, and a post page.",
        "Light and dark theme.",
        "The repository is public, and a deployed copy reads live listings.",
      ],
      fa: [
        "یک فید تهران با دسته، جستجو، و صفحه‌ی آگهی.",
        "تم روشن و تیره.",
        "ریپو عمومی است، و یک نسخه‌ی منتشرشده آگهی زنده می‌خواند.",
      ],
    },
    stack: ["React", "Redux Toolkit", "Tailwind", "Vite"],
  },
  {
    slug: "vertaflower",
    year: "2026",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/VertaFlower-React",
    title: { en: "Verta Flower", fa: "ورتا فلاور" },
    summary: {
      en: "A flower-shop storefront, with its own theme, routes, and a catalog that can fail.",
      fa: "یک ویترین گلفروشی، با تم و مسیر خودش، و کاتالوگی که ممکن است نیاید.",
    },
    context: {
      en: "The shop had to read as a flower shop: a home, a catalog, and a product page. The catalog comes from a public products API, so the look of the page has to do the work.",
      fa: "فروشگاه باید گلفروشی خوانده می‌شد: خانه، کاتالوگ، و صفحه‌ی محصول. کاتالوگ از یک API عمومی محصول می‌آید، پس ظاهر صفحه باید کار را بکند.",
    },
    role: {
      en: "I designed and built the storefront.",
      fa: "ویترین را طراحی و پیاده‌سازی کردم.",
    },
    constraints: {
      en: [
        "A flower shop and a generic product payload have to share one page.",
        "Some products live in the repo. The rest have to be requested.",
        "A slow or failed request cannot leave a blank screen.",
      ],
      fa: [
        "گلفروشی و بدنه‌ی یک محصول عمومی باید یک صفحه را شریک شوند.",
        "بعضی محصول‌ها داخل ریپو هستند. بقیه را باید درخواست کرد.",
        "درخواست کند یا ناموفق نباید صفحه را خالی بگذارد.",
      ],
    },
    decisions: {
      en: [
        {
          title: "A theme before the layout",
          body: "MUI is themed for the shop: a green and gold palette, Fraunces for headlines, and flat cards. The default dashboard look does not reach the page.",
        },
        {
          title: "Two sources, one product page",
          body: "Featured flowers are local. If the id is not one of them, the page asks the catalog. A missing product is its own state, with a way back to the list.",
        },
        {
          title: "Show the wait",
          body: "The catalog renders skeletons while the request is open, and an alert with retry when it fails. The screen does not sit on an empty grid.",
        },
      ],
      fa: [
        {
          title: "تم، قبل از چیدمان",
          body: "MUI برای فروشگاه تم شده: سبز و طلایی، Fraunces برای عنوان، و کارت تخت. ظاهر پیش‌فرض داشبورد به صفحه نمی‌رسد.",
        },
        {
          title: "دو منبع، یک صفحه‌ی محصول",
          body: "گل‌های ویژه محلی‌اند. اگر شناسه مال آن‌ها نباشد، صفحه از کاتالوگ می‌پرسد. محصول گم‌شده وضعیت خودش را دارد، با راه برگشت به فهرست.",
        },
        {
          title: "انتظار دیده شود",
          body: "کاتالوگ تا وقتی درخواست باز است اسکلت نشان می‌دهد، و وقتی شکست بخورد یک هشدار با تلاش دوباره. صفحه روی یک گرید خالی نمی‌نشیند.",
        },
      ],
    },
    outcome: {
      en: [
        "A shop with a home, a catalog, and a product page.",
        "About is a route of its own, with nested pages under it.",
        "The repo is public on GitHub.",
      ],
      fa: [
        "یک فروشگاه با خانه، کاتالوگ، و صفحه‌ی محصول.",
        "درباره مسیر خودش را دارد، با صفحه‌های تو در تو زیر آن.",
        "ریپو روی گیت‌هاب عمومی است.",
      ],
    },
    stack: ["React", "MUI", "React Router", "Axios"],
  },
  {
    slug: "list-of-users",
    year: "2023",
    kind: "personal",
    href: "https://github.com/Amirmohsenjalili/List-of-users",
    title: { en: "List of users", fa: "فهرست کاربرها" },
    summary: {
      en: "A TypeScript app for browsing people: cards, a detail page, server state, and forms that validate.",
      fa: "یک اپ تایپ‌اسکریپت برای دیدن آدم‌ها: کارت، صفحه‌ی جزئیات، وضعیت سرور، و فرم‌هایی که اعتبارسنجی می‌شوند.",
    },
    context: {
      en: "I wanted the small product pieces around a list of people: loading, a page for one person, and a form with rules.",
      fa: "تکه‌های کوچک محصول را دور یک فهرست از آدم‌ها می‌خواستم: بارگذاری، یک صفحه برای یک نفر، و فرم با قاعده.",
    },
    role: {
      en: "I built the app in TypeScript.",
      fa: "اپ را با تایپ‌اسکریپت ساختم.",
    },
    constraints: {
      en: [
        "Each person is a card, and the detail is a separate page.",
        "Server data should not live in the same place as form state.",
        "Invalid input has to be caught before it is sent.",
      ],
      fa: [
        "هر نفر یک کارت است، و جزئیات صفحه‌ی جدا دارد.",
        "داده‌ی سرور نباید همان‌جایی باشد که وضعیت فرم است.",
        "ورودی نامعتبر باید قبل از ارسال گرفته شود.",
      ],
    },
    decisions: {
      en: [
        {
          title: "MUI for the screen",
          body: "The list and the form use MUI. The detail page uses Joy. The visual system is the library’s, so the time went into the data and the forms.",
        },
        {
          title: "React Query for the server",
          body: "Fetching and the add-user mutation sit in React Query. The screen reads the query instead of copying the response into local state.",
        },
        {
          title: "Forms with Zod",
          body: "React Hook Form plus Zod describes what a valid person looks like, and the form follows that schema.",
        },
      ],
      fa: [
        {
          title: "MUI برای صفحه",
          body: "فهرست و فرم با MUI است. صفحه‌ی جزئیات با Joy است. سیستم بصری مال کتابخانه است، تا وقت روی داده و فرم برود.",
        },
        {
          title: "ری‌اکت کوئری برای سرور",
          body: "گرفتن داده و ثبت کاربر جدید در React Query است. صفحه کوئری را می‌خواند، به‌جای اینکه پاسخ را در وضعیت محلی کپی کند.",
        },
        {
          title: "فرم با Zod",
          body: "React Hook Form به‌همراه Zod می‌گوید یک کاربر معتبر چه شکلی است، و فرم از همان اسکیما پیروی می‌کند.",
        },
      ],
    },
    outcome: {
      en: [
        "A typed user list with cards, a detail page, queries, and validated forms.",
        "Jotai holds the drawer. That is the client state that is not the server.",
        "The repo is public on GitHub.",
      ],
      fa: [
        "یک فهرست تایپ‌شده با کارت، صفحه‌ی جزئیات، کوئری، و فرم معتبر.",
        "Jotai کشو را نگه می‌دارد. این همان وضعیت کلاینت است که سرور نیست.",
        "ریپو روی گیت‌هاب عمومی است.",
      ],
    },
    stack: ["TypeScript", "React", "MUI", "Zod"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
