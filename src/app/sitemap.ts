import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/about",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: new URL(getPathname({ locale, href }), siteUrl).toString(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((entry) => [
            entry,
            new URL(getPathname({ locale: entry, href }), siteUrl).toString(),
          ]),
        ),
      },
    })),
  );
}
