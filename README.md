# DeJon Johnson · Portfolio

A personal portfolio inspired by [brittanychiang.com](https://brittanychiang.com), rebuilt with your resume.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with custom `accent` token
- **Inter** via `next/font/google`
- **react-icons** for social/external-link glyphs
- Deploy target: **Vercel**

## Defining features

- Sticky left panel (name, title, in-page nav, socials) + scrollable right column on `lg+`, single column on mobile.
- **Cursor spotlight**: a fixed `<div>` whose background is updated on every `mousemove` to a radial gradient centered on the cursor. Gives the dark navy bg a subtle blue glow that follows you.
- **Active section indicator**: `IntersectionObserver` watches each `<section>` and the matching left-nav link extends its line (`w-8` → `w-16`) and brightens.
- Experience and project cards show their hover state as a translucent slate panel with an inner-top border glow and a drop shadow (lg+ only).

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Edit your content

- **Hero copy** in `components/Header.tsx`
- **About copy** in `components/About.tsx`
- **Experience entries** in `data/experience.ts`
- **Projects** in `data/projects.ts`
- **Writing** in `components/Writing.tsx` (currently a placeholder)
- **Social links** in `components/SocialLinks.tsx`
- **Resume PDF**: drop your file at `public/DeJon-Johnson-Resume.pdf` (the "View Full Résumé" link points there)

## Deploy

```bash
npx vercel
```
