import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { PhotoWash } from "@/components/photo-wash";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { SkillGroups } from "@/components/skill-groups";
import { profile } from "@/content/profile";
import { localize } from "@/lib/locale";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: localize(profile.summary, locale),
    alternates: alternatesFor("/about", locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const paragraphs = localize(profile.about, locale);
  const name = localize(profile.name, locale);

  return (
    <>
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <PhotoWash />
        </div>
        <Container className="relative py-16 md:py-24">
          <Reveal immediate>
            <p className="text-xs tracking-[0.18em] text-ink-muted uppercase">
              {localize(profile.role, locale)}
            </p>
            <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[0.95] text-ink">
              {name}
            </h1>
            <p className="mt-6 text-sm text-ink">
              {localize(profile.location, locale)}
              <span aria-hidden="true"> · </span>
              {localize(profile.availability, locale)}
            </p>
          </Reveal>
          <div className="mt-10 grid items-start gap-10 md:grid-cols-12">
            <div className="flex min-w-0 flex-col gap-6 md:col-span-7">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-measure text-lg text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative z-10 md:col-span-5">
              <div className="overflow-hidden border border-line bg-bg-raised">
                <Portrait
                  alt={name}
                  priority
                  className="aspect-square"
                  sizes="(min-width: 768px) 36vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="pb-20">
        <Reveal>
          <h2 className="mb-8 font-serif text-4xl text-ink md:text-5xl">{t("skills")}</h2>
          <SkillGroups locale={locale} />
        </Reveal>
      </Container>
    </>
  );
}
