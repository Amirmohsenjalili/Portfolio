"use client";

import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      className="grid size-9 place-items-center text-ink-muted transition-colors hover:text-ink"
      aria-label={label}
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="hidden size-4 dark:block">
      <circle cx="8" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 dark:hidden">
      <path
        d="M10.2 2.2a5.2 5.2 0 1 0 3.6 8.8 4.4 4.4 0 0 1-3.6-8.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
