import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { ProjectRow } from "@/components/project-row";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });

  return {
    title: t("title"),
    description: t("intro"),
    alternates: alternatesFor("/work", locale),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  const home = await getTranslations({ locale, namespace: "home" });
  const kindLabel = (kind: "work" | "personal") =>
    kind === "work" ? t("kindWork") : t("kindPersonal");

  return (
    <Container className="pb-20">
      <Reveal immediate className="pt-16 pb-10 md:pt-24">
        <h1 className="font-serif text-5xl text-ink md:text-7xl">{t("title")}</h1>
        <p className="text-measure mt-6 text-lg text-ink-muted">{t("intro")}</p>
      </Reveal>
      <ul className="border-b border-line pb-0">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={index + 1}
            locale={locale}
            viewLabel={home("view")}
            kindLabel={kindLabel(project.kind)}
          />
        ))}
      </ul>
    </Container>
  );
}
