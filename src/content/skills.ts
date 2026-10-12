import type { Locale } from "@/i18n/routing";

type Skill = string | Record<Locale, string>;

export const skillGroups: {
  title: Record<Locale, string>;
  items: Skill[];
}[] = [
  {
    title: { en: "Interface", fa: "رابط" },
    items: [
      "HTML",
      "CSS",
      "Sass",
      "Tailwind",
      { en: "Responsive layout", fa: "چیدمان واکنش‌گرا" },
    ],
  },
  {
    title: { en: "JavaScript", fa: "جاوااسکریپت" },
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: { en: "React", fa: "ری‌اکت" },
    items: ["React", "Redux", "React Router", "React Query"],
  },
  {
    title: { en: "Forms and data", fa: "فرم و داده" },
    items: ["React Hook Form", "Zod", "Axios", "MUI"],
  },
];

export type Competency = {
  name: Record<Locale, string>;
  level?: Record<Locale, string>;
  emphasis?: Record<Locale, string>;
};

export const competencyTitle: Record<Locale, string> = {
  en: "Technical competencies",
  fa: "صلاحیت‌های فنی",
};

export const competencies: Competency[] = [
  {
    name: { en: "Code Craftsmanship", fa: "مهارت ساخت کد" },
    level: { en: "Advanced", fa: "پیشرفته" },
    emphasis: { en: "Critical", fa: "حیاتی" },
  },
  {
    name: {
      en: "Technical Planning & Execution",
      fa: "برنامه‌ریزی و اجرای فنی",
    },
    level: { en: "Advanced", fa: "پیشرفته" },
    emphasis: { en: "Critical", fa: "حیاتی" },
  },
  {
    name: { en: "Testing & Quality Assurance", fa: "تست و تضمین کیفیت" },
    level: { en: "Advanced", fa: "پیشرفته" },
    emphasis: { en: "Critical", fa: "حیاتی" },
  },
  {
    name: { en: "Software Architecture & Design", fa: "معماری و طراحی نرم‌افزار" },
    level: { en: "Intermediate", fa: "متوسط" },
    emphasis: { en: "Critical", fa: "حیاتی" },
  },
  {
    name: { en: "AI Literacy & Application", fa: "سواد و کاربرد هوش مصنوعی" },
    level: { en: "Intermediate", fa: "متوسط" },
    emphasis: { en: "Medium", fa: "اهمیت متوسط" },
  },
  {
    name: { en: "Database & API Design", fa: "طراحی پایگاه‌داده و API" },
    level: { en: "Intermediate", fa: "متوسط" },
    emphasis: { en: "Medium", fa: "اهمیت متوسط" },
  },
  {
    name: {
      en: "DevOps & Infrastructure Management",
      fa: "مدیریت دوآپس و زیرساخت",
    },
    level: { en: "Intermediate", fa: "متوسط" },
    emphasis: { en: "Medium", fa: "اهمیت متوسط" },
  },
  {
    name: { en: "Reliability & Operations", fa: "پایداری و عملیات" },
    level: { en: "Intermediate", fa: "متوسط" },
    emphasis: { en: "Medium", fa: "اهمیت متوسط" },
  },
  {
    name: { en: "Security & Compliance", fa: "امنیت و انطباق" },
  },
];
