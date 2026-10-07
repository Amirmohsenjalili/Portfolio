import { getTranslations } from "next-intl/server";
import { profile } from "@/content/profile";
import { localize } from "@/lib/locale";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Portfolio";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return renderOgImage({
    locale,
    eyebrow: t("name"),
    title: localize(profile.role, locale),
  });
}
