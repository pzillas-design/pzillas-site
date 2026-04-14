# pzillas.com Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild pzillas.com 1:1 as a Next.js 16 App — delete all existing src/ content, download real photos from Squarespace CDN, build all 8 pages, deploy to GitHub + Vercel.

**Architecture:** Next.js 16 App Router with TypeScript and Tailwind CSS. All pages are static (no server-side data fetching needed). Images are downloaded locally to /public/images/ and served via next/image. Shared components (Header, Footer, PhotoGrid, VideoEmbed, UxuiCard) live in src/components/.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, Space Mono + Space Grotesk (Google Fonts), next/image (local files), youtube-nocookie.com + Vimeo player embeds

---

## File Map

```
pzillas-site/
  public/
    images/
      pzillas-logo.png
      foto/
        architektur.jpg         # Living-Kachel
        events-preview.jpg      # Events-Kachel
        personen-preview.jpg    # People-Kachel
      living/                   # 7 Bilder
      events/                   # 6 Bilder
      people/                   # 8 Bilder
      uxui/                     # ux.png + 12 Projektbilder
      drohne.jpg
      foto.png
      video.png
      voices-of-moria.jpeg
  src/
    app/
      layout.tsx                # Root layout: fonts, metadata, globals.css
      globals.css               # CSS-Variablen + Tailwind base
      page.tsx                  # Homepage: Bio, Videos, UX/UI preview, Foto preview
      foto/
        page.tsx                # 3 Kategorie-Kacheln
        living/page.tsx         # Headline + Text + PhotoGrid + CTA + Pagination
        events/page.tsx         # Headline + PhotoGrid + CTA + Pagination
        people/page.tsx         # Headline + Text + PhotoGrid + Pagination
      uxui/page.tsx             # Header-Bild + Projekt-Grid + CTA
      kontakt/page.tsx          # Kontaktinfos
      impressum/page.tsx        # Impressum-Text
    components/
      Header.tsx                # Fixed Nav mit Hamburger-Menü (mobile)
      Footer.tsx                # Logo PNG + Social Icons
      PhotoGrid.tsx             # next/image Grid, props: images[]
      VideoEmbed.tsx            # YouTube-nocookie + Vimeo iframe, props: type/id/hash/title
      UxuiCard.tsx              # Projektkarte, props: title/description/image
```

---

## Task 0: Aufräumen — Alte src/ Dateien löschen

**Files:**
- Delete: `src/app/page.tsx`
- Delete: `src/app/globals.css`
- Delete: `src/app/layout.tsx`
- Delete: `src/components/Header.tsx`
- Delete: `src/components/Footer.tsx`
- Delete: `src/components/GeometricArt.tsx`
- Create: `public/images/` (Verzeichnisse anlegen)

- [ ] **Schritt 1: Alte Dateien löschen**

```bash
rm src/app/page.tsx src/app/globals.css src/app/layout.tsx
rm src/components/Header.tsx src/components/Footer.tsx src/components/GeometricArt.tsx
```

- [ ] **Schritt 2: Bildverzeichnisse anlegen**

```bash
mkdir -p public/images/foto public/images/living public/images/events public/images/people public/images/uxui
```

- [ ] **Schritt 3: Verifizieren**

```bash
ls src/app/ src/components/ public/images/
```
Erwartet: `src/app/` und `src/components/` leer (außer `favicon.ico`), `public/images/` mit 5 Unterordnern.

---

## Task 1: Bilder herunterladen

**Files:** alle nach `public/images/`

Basis-URL: `https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197/`

- [ ] **Schritt 1: Logo herunterladen**

```bash
curl -L "http://static1.squarespace.com/static/62156aea0ac19c4cf403d197/t/62251a9de33dd222cfc510ed/1646598813125/pzillas+logo.png" -o public/images/pzillas-logo.png
```

- [ ] **Schritt 2: Fotografie-Übersicht Kacheln (3 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/b6ce91d7-2853-48f2-a8a5-45d11c0f287c/Architektur3+Kopie.jpg?format=1500w" -o public/images/foto/architektur.jpg
curl -L "$BASE/ab791ece-502e-4163-81a4-74e7907c815c/Events.jpg?format=1500w" -o public/images/foto/events-preview.jpg
curl -L "$BASE/5692e51c-87ea-44c9-b08a-98ebb8743e63/Personen.jpg?format=1500w" -o public/images/foto/personen-preview.jpg
```

- [ ] **Schritt 3: Living-Bilder (7 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/224bb926-7591-4582-8f4a-f2bf96ca0fee/-Portfolio-Drohnenfotografie-0006web.jpg?format=1500w" -o "public/images/living/drohne-0006.jpg"
curl -L "$BASE/371b6e79-6c77-41d7-bba4-96fdba0894ac/-Portfolio-Immobilienfotografie-0007web.jpg?format=1500w" -o "public/images/living/immo-0007.jpg"
curl -L "$BASE/3dfcaaa9-a8fd-4679-bcc7-45a25d1caeb2/-Portfolio-Immobilienfotografie-0012web.jpg?format=1500w" -o "public/images/living/immo-0012.jpg"
curl -L "$BASE/6c4c5fa3-6e3b-4690-b8d2-094e712bef83/-Portfolio-Drohnenfotografie-0007.jpeg?format=1500w" -o "public/images/living/drohne-0007.jpg"
curl -L "$BASE/86c80222-18df-49d0-bd23-36361817f4f1/-Portfolio-Immobilienfotografie-0003web.jpg?format=1500w" -o "public/images/living/immo-0003.jpg"
curl -L "$BASE/8c17cfc9-fbd9-488e-b5f3-72e50cfd5e3a/-Portfolio-Immobilienfotografie-0009web.jpg?format=1500w" -o "public/images/living/immo-0009.jpg"
curl -L "$BASE/a0cb40ce-6f5b-421b-8464-b98b6d9f6ba1/Bild+3web.jpg?format=1500w" -o "public/images/living/bild3.jpg"
```

- [ ] **Schritt 4: Events-Bilder (6 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/2ec655e6-01ee-43de-8253-f08e1b1d7bb6/webDSC00793-Edit.jpg?format=1500w" -o "public/images/events/dsc00793.jpg"
curl -L "$BASE/3537ada1-8517-4132-84cf-c660bc0871ed/web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg?format=1500w" -o "public/images/events/web1d223.jpg"
curl -L "$BASE/730ad40d-bf06-4bd4-a540-46580b471f4d/webDSC07273.jpg?format=1500w" -o "public/images/events/dsc07273.jpg"
curl -L "$BASE/b8a315c8-f21d-437c-a4b7-659f7f4a2c5c/da2ecba0-c96f-4276-9496-e03abdd84e38_rw_1920.jpg?format=1500w" -o "public/images/events/da2ecba0.jpg"
curl -L "$BASE/b947f95c-5313-4d6a-9406-cd10c35b592c/webfedd4681-e19a-47cc-853d-34ed841830c7_rw_1920.jpg?format=1500w" -o "public/images/events/webfedd.jpg"
curl -L "$BASE/da34e00a-fe0d-454f-b166-bc40e14e4c9f/webDSC00631.jpg?format=1500w" -o "public/images/events/dsc00631.jpg"
```

- [ ] **Schritt 5: People-Bilder (8 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/0a922039-8486-4855-8acc-a21841d5dd4b/web32b78e3a-92d9-47bf-804e-bb29ca172176_rw_1920.jpg?format=1500w" -o "public/images/people/web32b.jpg"
curl -L "$BASE/5714cb66-6da6-4c2f-94bc-ae7276e7b396/web50e17b5f-2ebe-4be0-a231-b8f8349b2b4d_rw_1920.jpg?format=1500w" -o "public/images/people/web50e.jpg"
curl -L "$BASE/74d8f957-4ba7-4ea5-ab98-f991468a462c/web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg?format=1500w" -o "public/images/people/web1d2.jpg"
curl -L "$BASE/a56c3c07-420c-4503-8a1f-a72f379f5ae9/webDSC07273.jpg?format=1500w" -o "public/images/people/dsc07273.jpg"
curl -L "$BASE/ad1783a1-ce21-418b-bf3f-96c07e48df6f/webBildschirm_foto+2023-02-16+um+19.07.06.jpg?format=1500w" -o "public/images/people/bildschirm.jpg"
curl -L "$BASE/c776d031-67d7-4f3c-a97d-83b826685246/webDSC07760-2.jpg?format=1500w" -o "public/images/people/dsc07760.jpg"
curl -L "$BASE/d856e456-20be-4549-bf29-cd842fb1b7c6/P1210241-EDIT.jpg?format=1500w" -o "public/images/people/p1210241.jpg"
curl -L "$BASE/fc54c065-8ca1-40f7-bf71-f47260eb892e/webDSC07480-2.jpg?format=1500w" -o "public/images/people/dsc07480.jpg"
```

- [ ] **Schritt 6: UX/UI-Bilder (13 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/ccb5d009-3755-4bf3-9a13-4ba451955b1e/ux.png?format=1500w" -o "public/images/uxui/ux.png"
curl -L "$BASE/c83ce1f2-9659-4da6-b77b-176f66cc3ec0/Tososto+%281%29.png?format=1500w" -o "public/images/uxui/tososto.png"
curl -L "$BASE/026a3f5b-603f-41b2-b8a4-204cafa08813/8+600kids.png?format=1500w" -o "public/images/uxui/600kids.png"
curl -L "$BASE/116efa56-a179-4709-b68b-143b69857ce4/Produkt.jpg?format=1500w" -o "public/images/uxui/leasehub.jpg"
curl -L "$BASE/760db4d1-225f-49e1-9981-78cdf77076c6/44+guinnes.jpeg?format=1500w" -o "public/images/uxui/florian.jpg"
curl -L "$BASE/db997d5a-4c40-4254-8de3-5054d36da4e7/intro+1.png?format=1500w" -o "public/images/uxui/staatstheater.png"
curl -L "$BASE/e354b089-200c-4e74-8b69-d4156cbf92cb/s.o.+foto.jpg?format=1500w" -o "public/images/uxui/jakob-admin.jpg"
curl -L "$BASE/750b04e9-8dac-4c6d-9fe5-9d7c961a8e1c/expose.jpg?format=1500w" -o "public/images/uxui/jakob-techniker.jpg"
curl -L "$BASE/fae22b3b-7788-4290-bfe6-00316aa9b1fa/Ai.jpg?format=1500w" -o "public/images/uxui/qrmine.jpg"
curl -L "$BASE/bd23fdc4-e020-496b-b17a-286be7f26200/h%2B+%281%29.jpeg?format=1500w" -o "public/images/uxui/evmoosburg.jpg"
curl -L "$BASE/b264985a-6a0a-41cc-a08c-c08e2c9a7320/bout2-min.jpeg?format=1500w" -o "public/images/uxui/bout.jpg"
# QR Mine Hauptbild (static1 CDN, anderer Basis-URL)
curl -L "http://static1.squarespace.com/static/62156aea0ac19c4cf403d197/t/1647010394762-6C6WPB3N8YW7UJPUDK9E/4+qr.png" -o "public/images/uxui/qrmine.jpg"
```

- [ ] **Schritt 7: Homepage-Bilder (4 Bilder)**

```bash
BASE="https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197"
curl -L "$BASE/8c362920-03b1-4fbd-82ba-5b40e766e497/foto.png?format=1500w" -o "public/images/foto.png"
curl -L "$BASE/26622d5e-20d7-46d8-9fc2-0be5b6cdae90/video.png?format=1500w" -o "public/images/video.png"
curl -L "$BASE/3059c565-8028-44b1-add5-ceec82ccb0cc/Drohne.jpg?format=1500w" -o "public/images/drohne.jpg"
curl -L "$BASE/cd2fcda2-1b38-4d51-8cd5-24f7b42ff0cc/Voices-of-Moria-Seebruecke-4-min-scaled.jpeg?format=1500w" -o "public/images/voices.jpg"
```

- [ ] **Schritt 8: Verifizieren — alle Dateien vorhanden**

```bash
echo "Logo:"; ls -la public/images/pzillas-logo.png
echo "Foto:"; ls public/images/foto/
echo "Living:"; ls public/images/living/ | wc -l  # erwartet: 7
echo "Events:"; ls public/images/events/ | wc -l  # erwartet: 6
echo "People:"; ls public/images/people/ | wc -l  # erwartet: 8
echo "UX/UI:"; ls public/images/uxui/ | wc -l     # erwartet: 11
```

- [ ] **Schritt 9: Commit**

```bash
git init  # falls noch kein Git-Repo
git add public/images/
git commit -m "feat: download all images from Squarespace CDN"
```

---

## Task 2: Foundation — globals.css + layout.tsx

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`

- [ ] **Schritt 1: globals.css schreiben**

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme inline {
  --color-background: #000000;
  --color-foreground: #ffffff;
  --color-muted: #999999;
  --color-border: #333333;
  --font-mono: "Space Mono", monospace;
  --font-sans: "Space Grotesk", system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: #fff;
  font-family: var(--font-sans);
  overflow-x: hidden;
}
```

- [ ] **Schritt 2: layout.tsx schreiben**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pzillas — Mediendesigner Frankfurt",
  description:
    "Michael Pzillas — freischaffender Mediendesigner in Frankfurt. Fotografie, UX/UI Design, Videoproduktion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
```

- [ ] **Schritt 3: Build verifizieren**

```bash
cd /Users/michaelpzillas/Projekte/_pzillas\ homepage/pzillas-site
npm run build
```
Erwartet: Kein Fehler. (Seiten fehlen noch — ist ok solange layout.tsx kompiliert.)

- [ ] **Schritt 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: foundation — fonts, CSS variables, root layout"
```

---

## Task 3: Header-Komponente

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Schritt 1: Header.tsx schreiben**

```tsx
// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Fotografie", href: "/foto" },
  { label: "UX / UI", href: "/uxui" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <nav className="flex items-center justify-between px-6 md:px-12 h-16">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/pzillas-logo.png"
            alt="Pzillas"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-sans text-sm text-white/70 hover:text-white tracking-widest uppercase transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü"
        >
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-xl text-white tracking-widest uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```
Erwartet: Kein Fehler.

- [ ] **Schritt 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: Header component with mobile hamburger menu"
```

---

## Task 4: Footer-Komponente

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Schritt 1: Footer.tsx schreiben**

```tsx
// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "Mail", href: "mailto:pzillas2@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/pzillas" },
  { label: "YouTube", href: "https://youtube.com/channel/UCG7A7KcwGf2p72k74aZY7Hg" },
  { label: "Vimeo", href: "https://vimeo.com/pzillas" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 flex flex-col items-center gap-6 text-center">
      <Link href="/foto">
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-white hover:text-white/70 transition-colors">
          EVENTS ›
        </span>
      </Link>

      <Link href="/">
        <Image
          src="/images/pzillas-logo.png"
          alt="Pzillas"
          width={160}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </Link>

      <ul className="flex items-center gap-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/50 hover:text-white transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: Footer component with logo and social links"
```

---

## Task 5: PhotoGrid-Komponente

**Files:**
- Create: `src/components/PhotoGrid.tsx`

- [ ] **Schritt 1: PhotoGrid.tsx schreiben**

```tsx
// src/components/PhotoGrid.tsx
import Image from "next/image";

interface PhotoGridProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 3;
}

export default function PhotoGrid({ images, columns = 3 }: PhotoGridProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-2`}>
      {images.map((img) => (
        <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/components/PhotoGrid.tsx
git commit -m "feat: PhotoGrid component with next/image and hover effect"
```

---

## Task 6: VideoEmbed-Komponente

**Files:**
- Create: `src/components/VideoEmbed.tsx`

- [ ] **Schritt 1: VideoEmbed.tsx schreiben**

```tsx
// src/components/VideoEmbed.tsx
interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  id: string;
  hash?: string;  // nur Vimeo
  title: string;
}

export default function VideoEmbed({ type, id, hash, title }: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}&dnt=1` : "?dnt=1"}`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/components/VideoEmbed.tsx
git commit -m "feat: VideoEmbed component (YouTube-nocookie + Vimeo DNT)"
```

---

## Task 7: UxuiCard-Komponente

**Files:**
- Create: `src/components/UxuiCard.tsx`

- [ ] **Schritt 1: UxuiCard.tsx schreiben**

```tsx
// src/components/UxuiCard.tsx
import Image from "next/image";

interface UxuiCardProps {
  title: string;
  description: string;
  image: string;
}

export default function UxuiCard({ title, description, image }: UxuiCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="font-mono text-sm tracking-widest uppercase text-white">{title}</h3>
      <p className="font-sans text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/components/UxuiCard.tsx
git commit -m "feat: UxuiCard component for UX/UI project grid"
```

---

## Task 8: Homepage (/)

**Files:**
- Create: `src/app/page.tsx`

- [ ] **Schritt 1: page.tsx schreiben**

```tsx
// src/app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import UxuiCard from "@/components/UxuiCard";
import Image from "next/image";
import Link from "next/link";

const videos = [
  { type: "youtube" as const, id: "TZHdM6rKTZI", title: "Endstation Teneriffa" },
  { type: "vimeo" as const, id: "636544067", hash: "f4c30a3698", title: "Augmented Spaces" },
  { type: "youtube" as const, id: "CEKRLxDiFQU", title: "Ein Tag mit ITler Evgenij" },
];

const uxuiPreview = [
  { title: "Tososto", description: "Plattform für nachhaltige Immobilienprojekte.", image: "/images/uxui/tososto.png" },
  { title: "600kids.org", description: "Webseite für eine Wohltätigkeitsorganisation für Kinder in Myanmar.", image: "/images/uxui/600kids.png" },
  { title: "LEASEHUB", description: "Software zum Erstellen von Leasingverträgen mit klarem UI.", image: "/images/uxui/leasehub.jpg" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero / Über mich */}
        <section className="px-6 md:px-12 py-24 md:py-36 max-w-4xl mx-auto">
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-8 leading-tight">
            Medien&shy;designer.
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt.
            Ich fühle mich in allen Bereichen der Kommunikation zu Hause, von Webdesign bis zu
            Videoproduktion, und liebe es, Dinge neu zu denken. Mein Grundsatz dabei lautet:
            Gestaltung ist nur so gut wie die Idee, der sie Form verleiht.
          </p>
          <div className="mt-10">
            <a
              href="mailto:pzillas2@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontakt
            </a>
          </div>
        </section>

        {/* Videos */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">Videos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id}>
                <VideoEmbed {...v} />
                <p className="font-sans text-sm text-white/50 mt-3">{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UX/UI */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">UX / UI Design</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {uxuiPreview.map((p) => (
              <UxuiCard key={p.title} {...p} />
            ))}
          </div>
          <Link href="/uxui" className="font-sans text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors">
            Alle Projekte →
          </Link>
        </section>

        {/* Fotografie */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">Fotografie</p>
          <div className="relative aspect-[16/7] overflow-hidden mb-8">
            <Image src="/images/drohne.jpg" alt="Fotografie" fill className="object-cover" sizes="100vw" />
          </div>
          <blockquote className="font-sans text-white/50 italic mb-6">
            „Sehr schnell, sehr unkompliziert und sehr gut gestaltet." — Sven
          </blockquote>
          <Link href="/foto" className="font-sans text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors">
            Fotografie →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 2: Dev-Server starten und visuell prüfen**

```bash
npm run dev
```
Öffne http://localhost:3000 — prüfe: Bio-Text, 3 Videos, 3 UX/UI-Previews, Foto-Banner.

- [ ] **Schritt 3: Build verifizieren**

```bash
npm run build
```
Erwartet: ✓ ohne Fehler.

- [ ] **Schritt 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: homepage with bio, videos, UX/UI preview, foto section"
```

---

## Task 9: Fotografie-Übersicht (/foto)

**Files:**
- Create: `src/app/foto/page.tsx`

- [ ] **Schritt 1: page.tsx schreiben**

```tsx
// src/app/foto/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Living", href: "/foto/living", image: "/images/foto/architektur.jpg" },
  { label: "Events", href: "/foto/events", image: "/images/foto/events-preview.jpg" },
  { label: "People", href: "/foto/people", image: "/images/foto/personen-preview.jpg" },
];

export default function FotoPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-12">Fotografie</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-mono text-sm tracking-widest uppercase text-white group-hover:text-white/70 transition-colors">
                  {cat.label}
                </h2>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/app/foto/page.tsx
git commit -m "feat: /foto overview page with Living/Events/People categories"
```

---

## Task 10: /foto/living, /foto/events, /foto/people

**Files:**
- Create: `src/app/foto/living/page.tsx`
- Create: `src/app/foto/events/page.tsx`
- Create: `src/app/foto/people/page.tsx`

- [ ] **Schritt 1: living/page.tsx schreiben**

```tsx
// src/app/foto/living/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/living/drohne-0006.jpg", alt: "Drohnenfotografie" },
  { src: "/images/living/immo-0007.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/immo-0012.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/drohne-0007.jpg", alt: "Drohnenfotografie" },
  { src: "/images/living/immo-0003.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/immo-0009.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/bild3.jpg", alt: "Interieur" },
];

export default function LivingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8 leading-tight">
            Lebensräume<br />meisterhaft<br />Inszeniert.
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl mb-12">
            Mit Professionalität und einem tiefen Verständnis dafür, wie gute Fotografie Szenen zum
            Leben erweckt, versuche ich, Räume nicht nur abzubilden, sondern ihre Essenz einfangen
            und eine Atmosphäre zu schaffen, die den Betrachter emotional anspricht. Beim Fotografieren
            nehme ich mir Zeit, um jeden Raum aus mehreren Perspektiven einzufangen. Ich arbeite mit
            verschiedenen Kameras, inklusive 360°-Kameras und Drohnen. In der Nachbearbeitung wähle
            ich die Motive aus, die am besten zusammen wirken.
          </p>
          <PhotoGrid images={images} columns={3} />
          <div className="mt-12 py-12 border-t border-white/10 text-center">
            <p className="font-mono text-sm tracking-widest uppercase text-white mb-4">
              Bereit für beeindruckende Bilder?
            </p>
            <a
              href="mailto:pzillas2@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontaktieren
            </a>
          </div>
        </section>
        <nav className="flex justify-between px-6 md:px-12 py-6 border-t border-white/10 font-sans text-sm text-white/40">
          <span />
          <Link href="/foto/events" className="hover:text-white transition-colors">Weiter → Events</Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 2: events/page.tsx schreiben**

```tsx
// src/app/foto/events/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/events/dsc00793.jpg", alt: "Event" },
  { src: "/images/events/web1d223.jpg", alt: "Event" },
  { src: "/images/events/dsc07273.jpg", alt: "Event" },
  { src: "/images/events/da2ecba0.jpg", alt: "Event" },
  { src: "/images/events/webfedd.jpg", alt: "Event" },
  { src: "/images/events/dsc00631.jpg", alt: "Event" },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-12 leading-tight">
            Bring your<br />Community<br />closer
          </h1>
          <PhotoGrid images={images} columns={3} />
          <div className="mt-12 py-12 border-t border-white/10 text-center">
            <p className="font-mono text-sm tracking-widest uppercase text-white mb-4">
              Bereit für beeindruckende Bilder?
            </p>
            <a
              href="mailto:pzillas2@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontaktieren
            </a>
          </div>
        </section>
        <nav className="flex justify-between px-6 md:px-12 py-6 border-t border-white/10 font-sans text-sm text-white/40">
          <Link href="/foto/living" className="hover:text-white transition-colors">← Living</Link>
          <Link href="/foto/people" className="hover:text-white transition-colors">Weiter → People</Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 3: people/page.tsx schreiben**

```tsx
// src/app/foto/people/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/people/web32b.jpg", alt: "Portrait" },
  { src: "/images/people/web50e.jpg", alt: "Portrait" },
  { src: "/images/people/web1d2.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07273.jpg", alt: "Portrait" },
  { src: "/images/people/bildschirm.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07760.jpg", alt: "Portrait" },
  { src: "/images/people/p1210241.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07480.jpg", alt: "Portrait" },
];

export default function PeoplePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8 leading-tight">
            Szenen<br />des Lebens
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl mb-12">
            Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner
            Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine
            Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer
            Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie.
          </p>
          <PhotoGrid images={images} columns={3} />
        </section>
        <nav className="flex justify-between px-6 md:px-12 py-6 border-t border-white/10 font-sans text-sm text-white/40">
          <Link href="/foto/events" className="hover:text-white transition-colors">← Events</Link>
          <span />
        </nav>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 4: Build verifizieren**

```bash
npm run build
```
Erwartet: 3 neue Routen ohne Fehler: `/foto/living`, `/foto/events`, `/foto/people`

- [ ] **Schritt 5: Commit**

```bash
git add src/app/foto/
git commit -m "feat: foto subpages — living, events, people with photo grids"
```

---

## Task 11: UX/UI-Seite (/uxui)

**Files:**
- Create: `src/app/uxui/page.tsx`

- [ ] **Schritt 1: uxui/page.tsx schreiben**

```tsx
// src/app/uxui/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UxuiCard from "@/components/UxuiCard";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Tososto", description: "Eine Plattform, die Projektentwickler, Investoren, Bau- und Fachfirmen zusammenführt, um nachhaltige Immobilienprojekte zu realisieren.", image: "/images/uxui/tososto.png" },
  { title: "600kids.org", description: "Webseite für eine Wohltätigkeitsorganisation für Kinder in Myanmar.", image: "/images/uxui/600kids.png" },
  { title: "LEASEHUB", description: "Software u.A. zum Erstellen von Leasingverträgen. Klares UI und automatisierbare Workflows unterstützen den Anwender für mehr Effizienz in der Kundenbetreuung.", image: "/images/uxui/leasehub.jpg" },
  { title: "FLORIANZIMMER TICKETSHOP", description: "Ticketsystem für das Florian Zimmer Theater mit Webshop und CMS, und Ticket Validierung.", image: "/images/uxui/florian.jpg" },
  { title: "Staatstheater Darmstadt", description: "„Rewriting the map" – Eine App um die Stadtkarte von Darmstadt neu zu schreiben, eigene Spuren zu hinterlassen, sich mit Menschen vernetzen, sich zu gemeinsamen Spaziergängen verabreden und Dinge zu tauschen.", image: "/images/uxui/staatstheater.png" },
  { title: "JAKOB AdminPortal", description: "Software zur Koordination von Aufgaben, Touren, Kontakten und Ressourcen eines Dienstleisters im Bereich Wassertechnik.", image: "/images/uxui/jakob-admin.jpg" },
  { title: "JAKOB TECHNIKER-APP", description: "Die App erfasst Tätigkeiten, Zeiten, fertigt Berichte an, digitalisiert den vorher papierlastigen Arbeitsalltag von Kundendiensttechnikern.", image: "/images/uxui/jakob-techniker.jpg" },
  { title: "QR MINE APP", description: "QR Mine hilft dabei, verlorene Sachen wiederzufinden. Man kann aufklebbare QR-Codes bestellen, Finder können anschließend über die Web-App den Besitzer kontaktieren.", image: "/images/uxui/qrmine.jpg" },
  { title: "EV MOOSBURG", description: "Ticketshop für den Eishockeyclub Moosburg, mit CMS und Ticket-Validator.", image: "/images/uxui/evmoosburg.jpg" },
  { title: "Bout (Concept)", description: "Sport-Tracking-App mit Fokus auf Outdoor-Aktivitäten, ermöglicht Spielanalyse und bietet eine interaktive Karte für Sportstätten.", image: "/images/uxui/bout.jpg" },
];

export default function UxuiPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Header-Banner */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <Image src="/images/uxui/ux.png" alt="UX/UI Design" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">UX / UI Design</p>
          </div>
        </div>

        {/* Projekt-Grid */}
        <section className="px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <UxuiCard key={p.title} {...p} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 py-16 border-t border-white/10 text-center">
            <p className="font-sans text-base md:text-lg text-white/70 mb-6">
              Lasst uns gemeinsam etwas Umwerfendes entwickeln.
            </p>
            <Link
              href="/kontakt"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontakt
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 2: Build verifizieren**

```bash
npm run build
```

- [ ] **Schritt 3: Commit**

```bash
git add src/app/uxui/page.tsx
git commit -m "feat: /uxui page with 10 project cards and CTA"
```

---

## Task 12: Kontakt + Impressum

**Files:**
- Create: `src/app/kontakt/page.tsx`
- Create: `src/app/impressum/page.tsx`

- [ ] **Schritt 1: kontakt/page.tsx schreiben**

```tsx
// src/app/kontakt/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-24 max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8">
            Kontakt
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-12">
            Erleben Sie Beratung neu – ungebunden, ergebnisorientiert. Meine Zusage? Nur, wenn ich
            Ihrem Projekt echten Mehrwert verleihen kann. Jedes Design-Projekt startet mit einem
            kostenlosen grafischen Entwurf.
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-1">E-Mail</p>
              <a href="mailto:pzillas2@gmail.com" className="font-sans text-white hover:text-white/70 transition-colors">
                pzillas2@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-1">Telefon</p>
              <a href="tel:+4915906401995" className="font-sans text-white hover:text-white/70 transition-colors">
                +49 159 06401995
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link href="/impressum" className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors">
              Impressum
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 2: impressum/page.tsx schreiben**

```tsx
// src/app/impressum/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-24 max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl font-bold tracking-tight uppercase text-white mb-12">
            Impressum
          </h1>
          <div className="font-sans text-white/60 leading-relaxed space-y-4">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Betreiber</p>
              <p>Michael Pzillas</p>
              <p>Lahnstraße 96</p>
              <p>60326 Frankfurt am Main</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Kontakt</p>
              <a href="mailto:pzillas2@gmail.com" className="hover:text-white transition-colors">
                pzillas2@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Schritt 3: Build verifizieren**

```bash
npm run build
```
Erwartet: alle 8 Routen grün.

- [ ] **Schritt 4: Vollständiger Dev-Check**

```bash
npm run dev
```
Manuell prüfen: /, /foto, /foto/living, /foto/events, /foto/people, /uxui, /kontakt, /impressum

- [ ] **Schritt 5: Commit**

```bash
git add src/app/kontakt/ src/app/impressum/
git commit -m "feat: kontakt and impressum pages"
```

---

## Task 13: GitHub Repo erstellen + pushen

- [ ] **Schritt 1: Git-Repo initialisieren (falls nötig) und GitHub-Repo erstellen**

```bash
cd /Users/michaelpzillas/Projekte/_pzillas\ homepage/pzillas-site
git init  # falls noch nicht geschehen
gh repo create pzillas-site --public --source=. --remote=origin --push
```
Erwartet: Repo `github.com/<username>/pzillas-site` wird erstellt und Code gepusht.

- [ ] **Schritt 2: Verifizieren**

```bash
gh repo view --web
```
Öffnet das Repo im Browser — Code sollte sichtbar sein.

---

## Task 14: Vercel Deployment

- [ ] **Schritt 1: Vercel CLI installieren (falls nötig)**

```bash
npm install -g vercel
```

- [ ] **Schritt 2: Deployen**

```bash
vercel link   # Projekt verknüpfen (einmalig, interaktiv)
vercel --prod
```
Beim `vercel link`-Wizard: neues Projekt erstellen, alle Defaults bestätigen.

- [ ] **Schritt 3: Deployment-URL prüfen**

Vercel gibt eine URL aus (z.B. `pzillas-site.vercel.app`). Im Browser öffnen und alle Seiten testen.

- [ ] **Schritt 4: Auto-Deploy verifizieren**

```bash
git commit --allow-empty -m "test: verify auto-deploy"
git push
```
Erwartet: Vercel startet automatisch ein neues Deployment.

---

## Hinweise für Domain-Umstellung (manuell)

Nach dem Vercel-Deployment: In Squarespace unter **Domains** die DNS-Einträge auf Vercel umstellen:
- A-Record: `76.76.21.21`
- CNAME für `www`: `cname.vercel-dns.com`

In Vercel unter **Project Settings → Domains**: `pzillas.com` hinzufügen.
