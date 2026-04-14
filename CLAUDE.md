# pzillas.com – Rebuild Projekt

## Ziel
1:1 Nachbau von pzillas.com als Next.js App, deployed auf Vercel.

## Status
- Next.js 16 Projekt mit TypeScript + Tailwind ist aufgesetzt
- Basis-Komponenten existieren: Header, Footer, GeometricArt, page.tsx
- Build läuft erfolgreich durch
- Figma-Design existiert: https://www.figma.com/design/pLoOCS12lOZRtKUxgUe1p9

## Was noch fehlt
- Echte Inhalte von pzillas.com crawlen (curl/wget) und einbauen
- Bilder herunterladen und einbinden
- Alle Unterseiten: /foto, /foto/living, /foto/events, /foto/people, /uxui, /kontakt, /impressum
- Fonts prüfen (aktuell: Space Grotesk + Caveat, Original-Fonts von Squarespace abgleichen)
- GitHub Repo erstellen + auf Vercel deployen
- Responsive Design feintunen

## Seitenstruktur (von pzillas.com)
- **Homepage**: Hero "CRISPY PIXELS." mit geometrischer Kunst (rot/grün/blau), Exposé-Banner, Fotografie-Sektion, UX/UI-Sektion, Videos, CTA, Footer
- **Fotografie** (/foto): Übersicht mit Kategorien LIVING, EVENTS, PEOPLE + Kamera-Linsen-Grafik im Hintergrund
- **Fotografie/Living** (/foto/living): "LEBENSRÄUME MEISTERHAFT INSZENIERT." + Foto-Grid + Video
- **UX/UI**: Portfolio mit Projekten (TOSOSTO, 600KIDS.ORG, etc.)
- **Kontakt**: Kontaktformular
- **Impressum**: Rechtliche Infos
- **Footer**: Logo (Pzillas in Handschrift), Social Icons (Mail, Instagram, YouTube, Vimeo), EVENTS-Link

## Design-Details
- Durchgehend schwarzer Hintergrund mit weißem Text
- Große uppercase Headings mit extra letter-spacing
- Monospace/geometrische Schrift für Überschriften
- Handschrift-Font für Logo "Pzillas"
- Minimalistisch, viel Whitespace
- Fotos als Grid mit Hover-Effekten
- Squarespace als Original-CMS

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (Hosting)

## Owner
Michael Pzillas – pzillas@gmail.com
