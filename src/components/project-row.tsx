import type { Project } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { formatDigits, formatIndex } from "@/lib/format";
import { localize } from "@/lib/locale";
import { Arrow } from "./arrow";

export function ProjectRow({
  project,
  index,
  locale,
  viewLabel,
  kindLabel,
}: {
  project: Project;
  index: number;
  locale: string;
  viewLabel: string;
  kindLabel: string;
}) {
  return (
    <li>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-4 border-t border-line py-8 transition-colors hover:bg-bg-raised md:-mx-4 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4"
      >
        <span className="text-sm text-ink-muted tabular-nums md:col-span-1">
          {formatIndex(index, locale)}
        </span>
        <span className="md:col-span-7">
          <span className="block font-serif text-3xl tracking-tight text-ink md:text-4xl">
            {localize(project.title, locale)}
            <span className="ms-3 align-middle text-[0.65rem] tracking-[0.16em] text-accent uppercase">
              {kindLabel}
            </span>
          </span>
          <span className="text-measure mt-3 block text-ink-muted">
            {localize(project.summary, locale)}
          </span>
        </span>
        <span className="text-sm text-ink-muted tabular-nums md:col-span-2">
          {formatDigits(project.year, locale)}
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-accent md:col-span-2 md:justify-end">
          {viewLabel}
          <Arrow />
        </span>
      </Link>
    </li>
  );
}
