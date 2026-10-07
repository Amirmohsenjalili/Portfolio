import { getProject } from "@/content/projects";
import { localize } from "@/lib/locale";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Case study";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  const title = project ? localize(project.title, locale) : slug;

  return renderOgImage({
    locale,
    eyebrow: project ? localize(project.summary, locale) : title,
    title,
  });
}
