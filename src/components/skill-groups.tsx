import { competencies, competencyTitle, skillGroups } from "@/content/skills";
import { localize } from "@/lib/locale";

function skillLabel(item: (typeof skillGroups)[number]["items"][number], locale: string) {
  return typeof item === "string" ? item : localize(item, locale);
}

export function SkillGroups({ locale }: { locale: string }) {
  return (
    <div className="flex flex-col gap-10">
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {skillGroups.map((group) => (
          <li key={group.title.en} className="bg-bg px-5 py-6">
            <h3 className="font-serif text-2xl text-ink">
              {localize(group.title, locale)}
            </h3>
            <p className="mt-3 text-ink-muted">
              {group.items.map((item) => skillLabel(item, locale)).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="mb-4 font-serif text-2xl text-ink">
          {localize(competencyTitle, locale)}
        </h3>
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {competencies.map((item) => {
            const emphasis = item.emphasis ? localize(item.emphasis, locale) : "";
            const level = item.level ? localize(item.level, locale) : "";
            const meta = [level, emphasis].filter(Boolean).join(" · ");
            return (
              <li
                key={item.name.en}
                className="flex items-baseline justify-between gap-4 bg-bg px-5 py-4"
              >
                <span className="text-ink">{localize(item.name, locale)}</span>
                {meta ? (
                  <span className="shrink-0 text-sm text-ink-muted">{meta}</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
