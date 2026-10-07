import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { PhotoWash } from "@/components/photo-wash";
import { Portrait } from "@/components/portrait";
import { ProjectRow } from "@/components/project-row";
import { Reveal } from "@/components/reveal";
import { SkillGroups } from "@/components/skill-groups";
import { principles } from "@/content/practice";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { formatIndex } from "@/lib/format";
import { localize } from "@/lib/locale";
import { alternatesFor } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    description: t("description"),
    alternates: alternatesFor("/", locale),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const work = await getTranslations({ locale, namespace: "work" });
  const selected = projects.slice(0, 3);
  const name = localize(profile.name, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: localize(profile.role, locale),
    email: profile.email,
    telephone: profile.phone.href.replace("tel:", ""),
    image: `${siteUrl}/portrait.jpg`,
    url: siteUrl,
    sameAs: profile.links.map((link) => link.href),
    worksFor: {
      "@type": "Organization",
      name: "Snapp Market",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: localize(profile.location, locale),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          </Reveal>
          <div className="mt-10 grid items-start gap-10 md:grid-cols-12">
            <Reveal className="min-w-0 md:col-span-7">
              <p className="text-measure text-lg text-ink-muted">
                {localize(profile.summary, locale)}
              </p>
              <p className="mt-6 text-sm text-ink">
                {localize(profile.location, locale)}
                <span aria-hidden="true"> · </span>
                {localize(profile.availability, locale)}
              </p>
            </Reveal>
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

      <Container>
        <section className="pb-20" aria-labelledby="skills">
          <Reveal>
            <h2 id="skills" className="mb-8 font-serif text-4xl text-ink md:text-5xl">
              {t("skills")}
            </h2>
            <SkillGroups locale={locale} />
          </Reveal>
        </section>

        <section className="pb-20" aria-labelledby="selected-work">
          <Reveal>
            <div className="mb-2 flex items-end justify-between gap-6">
              <h2
                id="selected-work"
                className="font-serif text-4xl text-ink md:text-5xl"
              >
                {t("selected")}
              </h2>
              <Link
                href="/work"
                className="text-sm text-accent underline decoration-accent/30 underline-offset-4"
              >
                {t("allWork")}
              </Link>
            </div>
            <ul className="border-b border-line">
              {selected.map((project, index) => (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  index={index + 1}
                  locale={locale}
                  viewLabel={t("view")}
                  kindLabel={
                    project.kind === "work" ? work("kindWork") : work("kindPersonal")
                  }
                />
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="pb-20" aria-labelledby="practice">
          <Reveal>
            <h2
              id="practice"
              className="mb-8 font-serif text-4xl text-ink md:text-5xl"
            >
              {t("practice")}
            </h2>
            <ol className="border-b border-line">
              {principles.map((principle, index) => (
                <li
                  key={principle.title.en}
                  className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6"
                >
                  <p className="text-sm text-ink-muted tabular-nums md:col-span-1">
                    {formatIndex(index + 1, locale)}
                  </p>
                  <h3 className="font-serif text-2xl text-ink md:col-span-4 md:text-3xl">
                    {localize(principle.title, locale)}
                  </h3>
                  <p className="text-measure text-ink-muted md:col-span-7">
                    {localize(principle.body, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section
          className="border-t border-line py-16 md:py-24"
          aria-labelledby="contact-strip"
        >
          <Reveal>
            <h2 id="contact-strip" className="font-serif text-2xl text-ink sm:text-4xl lg:text-6xl">
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-accent/30 underline-offset-[0.18em] transition-colors hover:decoration-accent"
              >
                {profile.email}
              </a>
            </h2>
            <p className="mt-6">
              <a
                href={profile.phone.href}
                dir="ltr"
                className="inline-block font-serif text-3xl text-ink underline decoration-accent/30 underline-offset-8 transition-colors hover:decoration-accent"
              >
                {localize(profile.phone.label, locale)}
              </a>
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent underline decoration-accent/30 underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </Container>
    </>
  );
}
