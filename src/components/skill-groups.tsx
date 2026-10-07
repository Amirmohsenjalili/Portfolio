import { skillGroups } from "@/content/skills";
import { localize } from "@/lib/locale";

function skillLabel(item: (typeof skillGroups)[number]["items"][number], locale: string) {
  return typeof item === "string" ? item : localize(item, locale);
}

export function SkillGroups({ locale }: { locale: string }) {
  return (
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
  );
}
