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
