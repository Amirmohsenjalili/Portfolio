"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { Container } from "./container";
import { LocaleSwitch } from "./locale-switch";
import { ThemeToggle } from "./theme-toggle";

type Item = {
  href: string;
  label: string;
};

export function SiteHeader({
  name,
  locale,
  items,
  menuLabel,
  closeLabel,
  navLabel,
  themeLabel,
}: {
  name: string;
  locale: string;
  items: Item[];
  menuLabel: string;
  closeLabel: string;
  navLabel: string;
  themeLabel: string;
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="font-serif text-lg tracking-tight text-ink">
            {name}
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <nav aria-label={navLabel} className="hidden md:block">
              <ul className="flex items-center gap-6">
                {items.map((item) => (
                  <li key={item.href}>
                    <NavLink item={item} pathname={pathname} />
                  </li>
                ))}
              </ul>
            </nav>
            <LocaleSwitch locale={locale} />
            <ThemeToggle label={themeLabel} />
            <button
              type="button"
              className="grid size-9 place-items-center text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              <span className="sr-only">{open ? closeLabel : menuLabel}</span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open ? (
          <nav
            id="mobile-nav"
            aria-label={navLabel}
            className="border-t border-line py-4 md:hidden"
          >
            <ul className="flex flex-col">
              {items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="block py-2 font-serif text-4xl tracking-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}

function NavLink({ item, pathname }: { item: Item; pathname: string }) {
  const active = isActive(pathname, item.href);
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-sm transition-colors",
        active ? "text-ink" : "text-ink-muted hover:text-ink",
      )}
    >
      {item.label}
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      {open ? (
        <path
          d="M4 4l8 8M12 4l-8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      ) : (
        <path
          d="M2.5 5h11M2.5 11h11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      )}
    </svg>
  );
}
