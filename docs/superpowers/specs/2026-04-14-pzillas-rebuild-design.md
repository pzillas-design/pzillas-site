# Design-Spec: pzillas.com Rebuild als Next.js App

**Datum:** 2026-04-14  
**Status:** Genehmigt  
**Scope:** Kompletter Neuaufbau (von Null) — 1:1 Squarespace-Inhalt in Next.js/Vercel

---

## Ziel

Die bestehende Squarespace-Website pzillas.com wird 1:1 als Next.js 16 App nachgebaut und auf Vercel deployed. Die neue App ersetzt Squarespace als Hosting-Plattform. Der Inhalt entspricht der aktuellen Live-Website (Stand: April 2026).

---

## Entscheidungen

| Frage | Entscheidung |
|-------|-------------|
| Content-Quelle | 1:1 Squarespace-Inhalt (Bio, Videos, alle Projekte) |
| Implementierungsansatz | Von Null — alles in `/src` wird gelöscht und neu gebaut |
| Heading-Font | Space Mono (Google Fonts, bestätigt im Squarespace-HTML) |
| Body-Font | Space Grotesk (Google Fonts, bereits im Projekt installiert) |
| Bilder | Download von Squarespace CDN nach `/public/images/` |
| Video-Embeds | `youtube-nocookie.com` (DSGVO-konform) + Vimeo privacy mode |
| Deployment | GitHub → Vercel |

---

## Seitenstruktur

### `/` — Homepage

**Sektionen:**
1. **Header/Nav** — Logo (`pzillas-logo.png`), Links: Fotografie · UX/UI · Kontakt
2. **Hero/Über mich** — "Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt. Ich fühle mich in allen Bereichen der Kommunikation zu Hause, von Webdesign bis zu Videoproduktion, und liebe es, Dinge neu zu denken. Mein Grundsatz dabei lautet: Gestaltung ist nur so gut wie die Idee, der sie Form verleiht."
3. **Videos** — 3 Video-Embeds (DSGVO: youtube-nocookie / Vimeo):
   - "Endstation Teneriffa" — YouTube `TZHdM6rKTZI` → `youtube-nocookie.com/embed/TZHdM6rKTZI`
   - "Augmented Spaces" — Vimeo `636544067` (hash: `f4c30a3698`) → `player.vimeo.com/video/636544067?h=f4c30a3698`
   - "Ein Tag mit ITler Evgenij" — YouTube `CEKRLxDiFQU` → `youtube-nocookie.com/embed/CEKRLxDiFQU`
4. **UX/UI Design** — Projekt-Thumbnail-Grid (siehe UX/UI-Bildmapping) mit Link zu `/uxui`
5. **Fotografie** — Testimonial "Sehr schnell, sehr unkompliziert und sehr gut gestaltet. — Sven" + Link zu `/foto`
6. **Footer** — Logo PNG, Social-Links (Mail: pzillas2@gmail.com, Instagram, YouTube, Vimeo: vimeo.com/pzillas)

---

### `/foto` — Fotografie-Übersicht

Drei Kategorie-Kacheln mit Vorschaubildern:
- **LIVING** → `/foto/living` (Vorschau: `Architektur3+Kopie.jpg`)
- **EVENTS** → `/foto/events` (Vorschau: `Events.jpg`)
- **PEOPLE** → `/foto/people` (Vorschau: `Personen.jpg`)

---

### `/foto/living` — Living

- **Headline:** "Lebensräume meisterhaft Inszeniert."
- **Text:** "Mit Professionalität und einem tiefen Verständnis dafür, wie gute Fotografie Szenen zum Leben erweckt, versuche ich, Räume nicht nur abzubilden, sondern ihre Essenz einfangen und eine Atmosphäre zu schaffen, die den Betrachter emotional anspricht. Beim Fotografieren nehme ich mir Zeit, um jeden Raum aus mehreren Perspektiven einzufangen. Ich arbeite mit verschiedenen Kameras, inklusive 360°-Kameras und Drohnen. In der Nachbearbeitung wähle ich die Motive aus, die am besten zusammen wirken."
- **Foto-Grid** (7 Bilder, alle in `/public/images/living/`):
  1. `-Portfolio-Drohnenfotografie-0006web.jpg`
  2. `-Portfolio-Immobilienfotografie-0007web.jpg`
  3. `-Portfolio-Immobilienfotografie-0012web.jpg`
  4. `-Portfolio-Drohnenfotografie-0007.jpeg`
  5. `-Portfolio-Immobilienfotografie-0003web.jpg`
  6. `-Portfolio-Immobilienfotografie-0009web.jpg`
  7. `Bild+3web.jpg`
- **CTA:** "Bereit für beeindruckende Bilder? [Kontaktieren]" → `mailto:pzillas2@gmail.com`
- **Pagination:** ← Zurück | Weiter → Events

---

### `/foto/events` — Events

- **Headline:** "Bring your Community closer"
- **Foto-Grid** (6 Bilder, alle in `/public/images/events/`):
  1. `webDSC00793-Edit.jpg`
  2. `web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg`
  3. `webDSC07273.jpg`
  4. `da2ecba0-c96f-4276-9496-e03abdd84e38_rw_1920.jpg`
  5. `webfedd4681-e19a-47cc-853d-34ed841830c7_rw_1920.jpg`
  6. `webDSC00631.jpg`
- **CTA:** "Bereit für beeindruckende Bilder? [Kontaktieren]" → `mailto:pzillas2@gmail.com`
- **Pagination:** ← Living | Weiter → People

---

### `/foto/people` — People

- **Headline:** "Szenen des Lebens"
- **Text:** "Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie."
- **Foto-Grid** (8 Bilder, alle in `/public/images/people/`):
  1. `web32b78e3a-92d9-47bf-804e-bb29ca172176_rw_1920.jpg`
  2. `web50e17b5f-2ebe-4be0-a231-b8f8349b2b4d_rw_1920.jpg`
  3. `web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg`
  4. `webDSC07273.jpg`
  5. `webBildschirm_foto+2023-02-16+um+19.07.06.jpg`
  6. `webDSC07760-2.jpg`
  7. `P1210241-EDIT.jpg`
  8. `webDSC07480-2.jpg`
- **Pagination:** ← Events

---

### `/uxui` — UX/UI Design

Header-Bild: `ux.png` (Banner)

Projekt-Grid (Karten sind nicht klickbar — reine Anzeige wie auf Squarespace):

| # | Titel | Beschreibung | Bild |
|---|-------|-------------|------|
| 1 | Tososto | Eine Plattform, die Projektentwickler, Investoren, Bau- und Fachfirmen zusammenführt, um nachhaltige Immobilienprojekte zu realisieren. | `Tososto+(1).png` |
| 2 | 600kids.org | Webseite für eine Wohltätigkeitsorganisation für Kinder in Myanmar | `8+600kids.png` |
| 3 | LEASEHUB | Software u.A. zum Erstellen von Leasingverträgen. Klares UI und automatisierbare Workflows unterstützen den Anwender für mehr Effizienz in der Kundenbetreuung. | `Produkt.jpg` |
| 4 | FLORIANZIMMER TICKETSHOP | Ticketsystem für das Florian Zimmer Theater mit Webshop und CMS, und Ticket Validierung. | `44+guinnes.jpeg` |
| 5 | Staatstheater Darmstadt | „Rewriting the map" - Eine App um die Stadtkarte von Darmstadt neu zu schreiben, eigene Spuren zu hinterlassen, sich mit Menschen vernetzen, sich zu gemeinsamen Spaziergänge verabreden und Dinge zu tauschen. | `intro+1.png` |
| 6 | JAKOB AdminPortal | Software zur Koordination von Aufgaben, Touren, Kontakten und Ressourcen eines Dienstleisters im Bereich Wassertechnik. | `s.o.+foto.jpg` |
| 7 | JAKOB TECHNIKER-APP | Die App erfasst Tätigkeiten, Zeiten, fertigt Berichte an, digitalisiert den vorher papierlastigen Arbeitsalltag von Kundendiensttechnikern. | `expose.jpg` |
| 8 | QR MINE APP | QR Mine hilft dabei, verlorene Sachen wiederzufinden. Man kann aufklebbare QR-Codes bestellen, Finder können anschließend über die Web-App den Besitzer kontaktieren. | `4+qr.png` (from `1647010394762...`) |
| 9 | EV MOOSBURG | Ticketshop für den Eishockeyclub Moosburg, mit CMS und Ticket-Validator | `h++(1).jpeg` |
| 10 | Bout (Concept) | Sport-Tracking-App mit Fokus auf Outdoor-Aktivitäten, ermöglicht Spielanalyse und bietet eine interaktive Karte für Sportstätten. | `bout2-min.jpeg` |

**CTA:** "Lasst uns gemeinsam etwas Umwerfendes entwickeln. [Kontakt]" → `/kontakt`

---

### `/kontakt` — Kontakt

- **Headline:** "Kontakt"
- **Subtext:** "Erleben Sie Beratung neu – ungebunden, ergebnisorientiert. Meine Zusage? Nur, wenn ich Ihrem Projekt echten Mehrwert verleihen kann. Jedes Design-Projekt startet mit einem kostenlosen grafischen Entwurf."
- **Email:** pzillas2@gmail.com (als `mailto:` Link)
- **Telefon:** +49 159 06401995 (als `tel:` Link)
- **Link:** → /impressum

---

### `/impressum` — Impressum

- **Betreiber:** Michael Pzillas
- **Adresse:** Lahnstraße 96, 60326 Frankfurt am Main
- **Kontakt:** pzillas2@gmail.com

---

## Komponenten-Architektur

```
src/
  app/
    layout.tsx            # Root layout, Font-Import (Space Mono + Space Grotesk), globals.css
    globals.css           # CSS-Variablen, Basis-Styles
    page.tsx              # Homepage
    foto/
      page.tsx            # Fotografie-Übersicht (3 Kacheln)
      living/page.tsx
      events/page.tsx
      people/page.tsx
    uxui/page.tsx
    kontakt/page.tsx
    impressum/page.tsx
  components/
    Header.tsx            # Fixed Nav mit Hamburger-Menü (mobile)
    Footer.tsx            # Logo PNG + Social Icons
    PhotoGrid.tsx         # Wiederverwendbares Foto-Grid mit next/image
    VideoEmbed.tsx        # Lazy-Loading YouTube-nocookie + Vimeo Embeds
    UxuiCard.tsx          # Projektkarte für UX/UI-Seite (nicht klickbar)
```

---

## Design-System

### Fonts
- **Headings:** `Space Mono` (Google Fonts) — `wght@400;700`
- **Body / Nav / UI:** `Space Grotesk` (Google Fonts) — `wght@300..700`

### Farben
```
--color-bg:      #000000
--color-fg:      #ffffff
--color-muted:   #999999
--color-border:  #333333
```

### Video-Embeds (DSGVO)
- YouTube: `https://www.youtube-nocookie.com/embed/{ID}` — kein Tracking ohne Consent
- Vimeo: `https://player.vimeo.com/video/{ID}?h={hash}&dnt=1` — Do Not Track

---

## Vollständiges Bild-Inventar (vollständige CDN-URLs → lokaler Pfad)

Basis-URL: `https://images.squarespace-cdn.com/content/v1/62156aea0ac19c4cf403d197/`  
Alle herunterladen mit `?format=1500w`, speichern ohne Query-String.

### Logo
- `http://static1.squarespace.com/static/62156aea0ac19c4cf403d197/t/62251a9de33dd222cfc510ed/1646598813125/pzillas+logo.png` → `/public/images/pzillas-logo.png`

### Fotografie-Übersicht (/foto) — Kachel-Vorschaubilder
| CDN-UUID | Dateiname | Lokaler Pfad |
|----------|-----------|--------------|
| `b6ce91d7-2853-48f2-a8a5-45d11c0f287c` | `Architektur3+Kopie.jpg` | `/public/images/foto/architektur.jpg` |
| `ab791ece-502e-4163-81a4-74e7907c815c` | `Events.jpg` | `/public/images/foto/events-preview.jpg` |
| `5692e51c-87ea-44c9-b08a-98ebb8743e63` | `Personen.jpg` | `/public/images/foto/personen-preview.jpg` |

### Living (/public/images/living/)
| CDN-UUID | Dateiname |
|----------|-----------|
| `224bb926-7591-4582-8f4a-f2bf96ca0fee` | `-Portfolio-Drohnenfotografie-0006web.jpg` |
| `371b6e79-6c77-41d7-bba4-96fdba0894ac` | `-Portfolio-Immobilienfotografie-0007web.jpg` |
| `3dfcaaa9-a8fd-4679-bcc7-45a25d1caeb2` | `-Portfolio-Immobilienfotografie-0012web.jpg` |
| `6c4c5fa3-6e3b-4690-b8d2-094e712bef83` | `-Portfolio-Drohnenfotografie-0007.jpeg` |
| `86c80222-18df-49d0-bd23-36361817f4f1` | `-Portfolio-Immobilienfotografie-0003web.jpg` |
| `8c17cfc9-fbd9-488e-b5f3-72e50cfd5e3a` | `-Portfolio-Immobilienfotografie-0009web.jpg` |
| `a0cb40ce-6f5b-421b-8464-b98b6d9f6ba1` | `Bild+3web.jpg` |

### Events (/public/images/events/)
| CDN-UUID | Dateiname |
|----------|-----------|
| `2ec655e6-01ee-43de-8253-f08e1b1d7bb6` | `webDSC00793-Edit.jpg` |
| `3537ada1-8517-4132-84cf-c660bc0871ed` | `web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg` |
| `730ad40d-bf06-4bd4-a540-46580b471f4d` | `webDSC07273.jpg` |
| `b8a315c8-f21d-437c-a4b7-659f7f4a2c5c` | `da2ecba0-c96f-4276-9496-e03abdd84e38_rw_1920.jpg` |
| `b947f95c-5313-4d6a-9406-cd10c35b592c` | `webfedd4681-e19a-47cc-853d-34ed841830c7_rw_1920.jpg` |
| `da34e00a-fe0d-454f-b166-bc40e14e4c9f` | `webDSC00631.jpg` |

### People (/public/images/people/)
| CDN-UUID | Dateiname |
|----------|-----------|
| `0a922039-8486-4855-8acc-a21841d5dd4b` | `web32b78e3a-92d9-47bf-804e-bb29ca172176_rw_1920.jpg` |
| `5714cb66-6da6-4c2f-94bc-ae7276e7b396` | `web50e17b5f-2ebe-4be0-a231-b8f8349b2b4d_rw_1920.jpg` |
| `74d8f957-4ba7-4ea5-ab98-f991468a462c` | `web1d223bdb-a4a9-430e-9cc2-c51ec940de1f_rw_1920.jpg` |
| `a56c3c07-420c-4503-8a1f-a72f379f5ae9` | `webDSC07273.jpg` |
| `ad1783a1-ce21-418b-bf3f-96c07e48df6f` | `webBildschirm_foto+2023-02-16+um+19.07.06.jpg` |
| `c776d031-67d7-4f3c-a97d-83b826685246` | `webDSC07760-2.jpg` |
| `d856e456-20be-4549-bf29-cd842fb1b7c6` | `P1210241-EDIT.jpg` |
| `fc54c065-8ca1-40f7-bf71-f47260eb892e` | `webDSC07480-2.jpg` |

### UX/UI (/public/images/uxui/)
| CDN-UUID | Dateiname | Projekt |
|----------|-----------|---------|
| `ccb5d009-3755-4bf3-9a13-4ba451955b1e` | `ux.png` | Header-Banner |
| `c83ce1f2-9659-4da6-b77b-176f66cc3ec0` | `Tososto+(1).png` | Tososto |
| `026a3f5b-603f-41b2-b8a4-204cafa08813` | `8+600kids.png` | 600kids.org |
| `116efa56-a179-4709-b68b-143b69857ce4` | `Produkt.jpg` | LEASEHUB |
| `760db4d1-225f-49e1-9981-78cdf77076c6` | `44+guinnes.jpeg` | FLORIANZIMMER TICKETSHOP |
| `db997d5a-4c40-4254-8de3-5054d36da4e7` | `intro+1.png` | Staatstheater Darmstadt |
| `e354b089-200c-4e74-8b69-d4156cbf92cb` | `s.o.+foto.jpg` | JAKOB AdminPortal |
| `750b04e9-8dac-4c6d-9fe5-9d7c961a8e1c` | `expose.jpg` | JAKOB TECHNIKER-APP |
| `fae22b3b-7788-4290-bfe6-00316aa9b1fa` | `Ai.jpg` | QR MINE APP (Zusatzbild) |
| `1647010394762-6C6WPB3N8YW7UJPUDK9E` (static1) | `4+qr.png` | QR MINE APP (Hauptbild) |
| `bd23fdc4-e020-496b-b17a-286be7f26200` | `h%2B+(1).jpeg` | EV MOOSBURG |
| `b264985a-6a0a-41cc-a08c-c08e2c9a7320` | `bout2-min.jpeg` | Bout (Concept) |

### Homepage-spezifisch (/public/images/)
| CDN-UUID | Dateiname | Verwendung |
|----------|-----------|------------|
| `8c362920-03b1-4fbd-82ba-5b40e766e497` | `foto.png` | Foto-Sektion Vorschau |
| `26622d5e-20d7-46d8-9fc2-0be5b6cdae90` | `video.png` | Video-Sektion Thumbnail |
| `3059c565-8028-44b1-add5-ceec82ccb0cc` | `Drohne.jpg` | Hero-Bereich |
| `cd2fcda2-1b38-4d51-8cd5-24f7b42ff0cc` | `Voices-of-Moria-Seebruecke-4-min-scaled.jpeg` | Events-Vorschau |
| `76743e4a-e6b7-42d7-8ed5-c03ad69ba61a` | `01+video+thump.jpg` | Video-Thumbnail |

---

## Deployment-Plan

1. **GitHub:** Neues öffentliches Repo `pzillas-site` erstellen via `gh` CLI, Code pushen
2. **Vercel:** Repo via `vercel` CLI verbinden, Auto-Deploy aktivieren
3. **Domain:** DNS-Einträge bei Squarespace auf Vercel umstellen — Anleitung wird bereitgestellt

---

## Nav-Routing

| Label | Route |
|-------|-------|
| Fotografie | `/foto` |
| UX / UI | `/uxui` |
| Kontakt | `/kontakt` |

---

## Responsive Design

Breakpoint: `md` = 768px (Tailwind-Standard).

| Element | Mobile (< 768px) | Desktop (≥ 768px) |
|---------|-----------------|-------------------|
| Header-Nav | Hamburger-Menü | Horizontale Links |
| Foto-Grid | 1 Spalte | 2–3 Spalten |
| UX/UI-Grid | 1 Spalte | 2 Spalten |
| Video-Grid | 1 Spalte | 3 Spalten |
| `/foto`-Kacheln | 1 Spalte | 3 Spalten |
| Schriftgröße Hero | `text-3xl` | `text-6xl` |

---

## next.config — Bild-Konfiguration

Alle Bilder werden lokal in `/public/images/` gespeichert. `next/image` verwendet lokale Pfade — keine `remotePatterns`-Konfiguration nötig.

---

## Was NICHT gebaut wird (Scope-Abgrenzung)

- Kein Kontaktformular (nur Email/Tel-Links)
- Kein CMS / Admin-Backend
- Keine Foto-Lightbox (einfacher Grid)
- Kein Blog / keine dynamischen Inhalte
- Keine i18n (nur Deutsch)
- Keine Cookie-Banner (youtube-nocookie + Vimeo DNT macht das unnötig)
