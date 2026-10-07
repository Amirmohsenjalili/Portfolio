import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container>
      <div className="py-24">
        <h1 className="font-serif text-5xl text-ink md:text-7xl">{t("title")}</h1>
        <p className="mt-6 text-ink-muted">{t("body")}</p>
        <Link
          href="/"
          className="mt-8 inline-block text-accent underline decoration-accent/30 underline-offset-4"
        >
          {t("home")}
        </Link>
      </div>
    </Container>
  );
}
