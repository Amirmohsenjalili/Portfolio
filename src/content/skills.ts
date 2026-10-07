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
