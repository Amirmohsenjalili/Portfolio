import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { formatDigits, formatIndex } from "@/lib/format";
import { localize } from "@/lib/locale";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: localize(project.title, locale),
    description: localize(project.summary, locale),
    alternates: alternatesFor(`/work/${slug}`, locale),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "work" });
  const decisions = localize(project.decisions, locale);

  return (
    <Container>
      <article className="py-16 md:py-24">
        <Reveal immediate>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <Arrow back />
            {t("back")}
          </Link>
          <p className="mt-10 text-xs tracking-[0.18em] text-accent uppercase">
            {project.kind === "work" ? t("kindWork") : t("kindPersonal")}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl text-ink md:text-7xl">
            {localize(project.title, locale)}
          </h1>
          <p className="mt-6 text-sm text-ink-muted tabular-nums">
            {formatDigits(project.year, locale)}
          </p>
          <p className="text-measure mt-8 text-lg text-ink-muted">
            {localize(project.summary, locale)}
          </p>
          {project.href ? (
            <p className="mt-6">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent underline decoration-accent/30 underline-offset-4"
              >
                {t("github")}
              </a>
            </p>
          ) : null}
        </Reveal>

        <div className="mt-16 max-w-3xl">
          <Section title={t("context")}>
            <p className="text-measure text-ink-muted">
              {localize(project.context, locale)}
            </p>
          </Section>
          <Section title={t("role")}>
            <p className="text-measure text-ink-muted">
              {localize(project.role, locale)}
            </p>
          </Section>
          <Section title={t("constraints")}>
            <ul className="flex flex-col gap-3">
              {localize(project.constraints, locale).map((item) => (
                <li key={item} className="text-measure text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
          <Section title={t("decisions")}>
            <ol className="flex flex-col">
              {decisions.map((decision, index) => (
                <li
                  key={decision.title}
                  className="grid gap-3 border-t border-line py-6 md:grid-cols-12"
                >
                  <p className="text-sm text-ink-muted tabular-nums md:col-span-1">
                    {formatIndex(index + 1, locale)}
                  </p>
                  <div className="md:col-span-11">
                    <h3 className="font-serif text-2xl text-ink">
                      {decision.title}
                    </h3>
                    <p className="text-measure mt-3 text-ink-muted">
                      {decision.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
          <Section title={t("outcome")}>
            <ul className="flex flex-col gap-3">
              {localize(project.outcome, locale).map((item) => (
                <li key={item} className="text-measure text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
          <Section title={t("stack")}>
            <p className="text-ink-muted">{project.stack.join(" · ")}</p>
          </Section>
        </div>
      </article>
    </Container>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="mb-4 font-serif text-3xl text-ink">{title}</h2>
      {children}
    </section>
  );
}
