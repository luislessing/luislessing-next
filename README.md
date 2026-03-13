# Luis Lessing Portfolio

Minimalistisches Portfolio für Theater und Hörspiel-Produktionen.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **TypeScript**
- **Framer Motion** — Seitenübergänge & Animationen
- **Resend** — Kontaktformular
- **Vercel Analytics**

## Entwicklung

```bash
npm install
npm run dev
```

Umgebungsvariable in `.env.local` eintragen:

```
RESEND_API_KEY=re_...
```

## Neues Projekt hinzufügen

1. Eintrag in `src/lib/projects.ts` ergänzen:

```ts
{
  slug: "projekt-name",
  title: "Projekt Name",
  category: "Theater",
  year: "2025",
  image: "/images/bild.jpg",
  description: "Kurze Beschreibung...",
  details: {
    genre: "Schauspiel",
    release: "2025",
  },
  content: [
    { title: "Über das Stück", text: "..." },
  ],
  credits: [
    { role: "Regie", name: "Name" },
  ],
  links: [
    { platform: "Spotify", url: "https://..." },
  ],
}
```

2. Bild nach `public/images/` kopieren

Die Detailseite erscheint automatisch unter `/portfolio/projekt-name`.

## OG-Bild aktualisieren

Das Vorschaubild beim Teilen der Seite liegt unter `public/images/og-image.jpg` (1200×630px).
Aktuell wird `demut.jpg` als Fallback genutzt — Pfad in `src/app/layout.tsx` anpassen sobald ein eigenes Bild vorliegt.

## Offene Punkte

- [ ] Streaming-Links für "Demut" setzen, sobald veröffentlicht (Spotify, Apple Music, SoundCloud in `src/lib/projects.ts`)
- [ ] Music-Icon in der Sidebar verlinken (`src/components/Sidebar.tsx`)
- [ ] OG-Bild durch eigenes 1200×630px Motiv ersetzen (`public/images/og-image.jpg`)

## Optimierungsvorschläge

### Performance
- **Bilder-Optimierung**: Die `demut.jpg` auf der Startseite nutzt `quality={85}`. Für bessere Ladezeiten könnte man `priority` auf der Startseite beibehalten, aber `quality` auf 75-80 reduzieren oder ein `.webp` Format verwenden.
- **Lazy Loading**: Bilder in der Portfolio-Grid können von `loading="lazy"` profitieren (Next.js macht das zwar automatisch, aber explizit wäre sicherer).
- **Font subsets**: Die Fonts laden aktuell alle Gewichte (`300,400,500,600,700`). Prüfen ob alle tatsächlich genutzt werden.
- **Bundle Size**: `framer-motion` ist relativ schwer. Für einfache Animationen könnte man zu lighter Alternativen wechseln (z.B. CSS transitions oder `motion` mini).

### SEO
- **Sitemap**: Eine dynamische `sitemap.xml` fehlt (nur `robots.ts` vorhanden). Next.js unterstützt das out-of-the-box.
- **canonical URLs**: Fehlen in den Metadata. Könnten helfen Duplicate Content zu vermeiden.
- **JSON-LD**: Structured Data für "Person" oder "CreativeWork" könnte die Suchergebnisse verbessern.

### UX/Design
- **Mobile Navigation**: Die Bottom-Nav ist funktional, aber eine Hamburger-Menü-Lösung oberhalb des Contents könnte mehr Platz auf kleinen Screens schaffen.
- **Portfolio Filter**: Bei mehreren Projekten wäre ein Filter nach Kategorie (Hörspiel/Theater) sinnvoll.
- **Audio Player**: Für Hörspiel-Projekte wäre ein inline Audio-Player auf der Detailseite nützlich.
- **Smooth Scroll**: Bei langen Seiten (About) wäre sanftes Scrollen nice.
- **Ladezustände**: Keine Loading-States bei Bildladen (skeleton wäre besser als blank).

### Accessibility
- **Skip Links**: Ein "Zum Inhalt springen" Link fehlt für Screenreader.
- **Farbkontrast**: `text-stone-500` (#78716c) auf `#F8F4EE` hat möglicherweise zu niedrigen Kontrast (WCAG AA = 4.5:1).
- **Focus States**: Keine sichtbaren focus-States bei Links/Buttons (außer hover).
- **Alt-Texte**: Bilder haben Alt-Texte, aber bei dekorativen Bildern (demut.jpg Hintergrund) könnte `alt=""` sinnvoller sein.

### Code-Qualität
- **TypeScript Strict Mode**: Aktuell kein `strict: true` in tsconfig - würde mehr Type-Safety bringen.
- **CSS Variables**: Einige Hardcoded Werte wie `#A0522D` (--accent) sind nicht konsistent verwendet (z.B. Inline-Styles für font-family).
- **Komponenten**: `HeroContent` und `AnimatedSection` wurden nicht geprüft – könnten optimierungsbedürftig sein.
- **API Route**: Die Contact-Form API-Route wurde nicht geprüft – Fehlerbehandlung könnte fehlen.

### Erweiterungen
- **Blog**: Ein Blog für Updates/Behind-the-Scenes wäre eine gute Ergänzung.
- **Dark Mode**: Aktuell nur Hell-Theme. Dark Mode Toggle wäre möglich.
- **Mehrsprachigkeit**: Falls gewünscht, wäre i18n mit `next-intl` oder ähnlichem umsetzbar.
- **CMS**: Projekte könnten aus einem Headless CMS (Sanity, Contentful) kommen statt hardcoded.
- **PWA**: Die manifest.json ist da, aber Service Worker für Offline-Fähigkeit fehlt.
