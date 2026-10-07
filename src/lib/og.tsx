import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function renderOgImage({
  locale,
  eyebrow,
  title,
}: {
  locale: string;
  eyebrow: string;
  title: string;
}) {
  const fonts = await loadFonts();
  const rtl = locale === "fa";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3eee6",
          color: "#241f1b",
          padding: "72px",
          fontFamily: "Portfolio",
          direction: rtl ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9c4a32",
            letterSpacing: rtl ? 0 : 3,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 24 ? 64 : 84,
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", width: "100%", height: 8, background: "#9c4a32" }} />
      </div>
    ),
    {
      ...ogSize,
      fonts,
    },
  );
}

async function loadFonts() {
  const fontDir = join(process.cwd(), "src/assets/fonts");
  const [display, arabic, latin] = await Promise.all([
    readFile(join(fontDir, "fraunces-500.woff")),
    readFile(join(fontDir, "vazirmatn-arabic-500.woff")),
    readFile(join(fontDir, "vazirmatn-latin-500.woff")),
  ]);

  return [
    { name: "Portfolio", data: display, weight: 500 as const, style: "normal" as const },
    { name: "Portfolio", data: arabic, weight: 500 as const, style: "normal" as const },
    { name: "Portfolio", data: latin, weight: 500 as const, style: "normal" as const },
  ];
}
