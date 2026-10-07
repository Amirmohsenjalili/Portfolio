# Portfolio

Bilingual portfolio for Amir Mohsen Jalili, a frontend developer at Snapp Market in Tehran.

English is the default locale and has no prefix (`/`). Persian is at `/fa` and renders right to left. Light and dark themes follow the system preference and can be switched in the header.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 and TypeScript
- Tailwind CSS 4
- [next-intl](https://next-intl.dev) for English and Persian
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark
- [Motion](https://motion.dev) for short entrances

## Scripts

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: intro, skills, selected work |
| `/work` | All projects |
| `/work/[slug]` | Case study |
| `/about` | Bio and skills |
| `/contact` | Email, phone, GitHub, LinkedIn |

Persian uses the same paths under `/fa`, for example `/fa/work`.

## Editing content

Identity, projects, and skills are typed TypeScript. Interface labels (navigation, section titles, buttons) are JSON.

| What | Where |
| --- | --- |
| Name, role, bio, email, phone, links | `src/content/profile.ts` |
| Work and personal projects | `src/content/projects.ts` |
| Skill groups | `src/content/skills.ts` |
| Working principles | `src/content/practice.ts` |
| UI copy, English | `src/messages/en.json` |
| UI copy, Persian | `src/messages/fa.json` |
| Portrait | `public/portrait.jpg` |

A project needs a `slug`, a `kind` of `"work"` or `"personal"`, and English and Persian copy. Set `href` when the project has a public repository. The home page shows the first three entries.

Replace `public/portrait.jpg` to change the photo used in the hero, about page, contact page, and the blurred background.

## Site URL

Canonical links, the sitemap, and Open Graph images use `NEXT_PUBLIC_SITE_URL`. When it is unset, the site falls back to `http://localhost:3000`.

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

## Fonts

English headlines use Fraunces. English body text uses Source Sans 3. Persian headlines use Markazi Text. Persian body text uses Vazirmatn. All four are loaded from Google Fonts through `next/font`.
