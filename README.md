# Luis Lessing Portfolio

Modernes, minimalistisches Portfolio auf Basis von Next.js 14.

## Todo-Liste

### High Priority
- [x] SEO optimieren (Meta Tags, Title, Description, Open Graph)
- [x] Bilder optimieren (Next.js Image, Lazy Loading, WebP)
- [x] Texte von alter Seite übernehmen (About, Portfolio, Footer)
- [ ] Streaming-Links für "Demut" setzen (Spotify, Apple Music, SoundCloud)
- [x] `generateMetadata` auf allen Unterseiten ergänzen (About, Portfolio, Contact)
- [x] Portfolio-Grid auf `projects.ts` umstellen (Duplizierung entfernen)

### Medium Priority
- [x] Impressum-Seite erstellen
- [x] Footer auf allen Seiten konsistent hinzufügen
- [x] Mobile Navigation verbessern
- [x] Framer Motion einsetzen (Seitenübergänge, Scroll-Animationen, Karten im Portfolio)
- [x] Kontaktformular ergänzen (Resend + Next.js API Route)
- [ ] Music-Icon in der Sidebar verlinken (Spotify/SoundCloud/Bandcamp)
- [ ] Analytics integrieren (z.B. Vercel Analytics oder Plausible)

### Low Priority
- [x] Weitere Portfolio-Projekte hinzufügen
- [x] Favicon und PWA-Konfiguration
- [ ] Ungenutzte Assets in public/ aufräumen (page-bg-img-*.png, scrolldown-icon.png)
- [ ] Alt-Texte aller Bilder prüfen und ergänzen

## Technologie

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Lucide React Icons

## Getting Started

```bash
npm install
npm run dev
```

## Struktur

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── about/page.tsx     # Über mich
│   ├── portfolio/
│   │   ├── page.tsx      # Portfolio-Übersicht
│   │   └── demut/page.tsx
│   ├── contact/page.tsx
│   ├── impressum/page.tsx
│   └── layout.tsx         # Root Layout mit Sidebar
├── components/
│   ├── Sidebar.tsx        # Navigation + Bottom Nav (Mobile)
│   └── Footer.tsx         # Footer
└── public/
    ├── images/             # Statische Bilder
    ├── robots.txt
    ├── sitemap.xml
    └── manifest.json       # PWA Manifest
```

## SEO

- Metadata in `layout.tsx`
- Open Graph Tags für Social Media
- robots.txt und sitemap.xml
- Semantic HTML
- PWA manifest.json

## Design

- Farbschema: Stone (warmes Grau)
- Schriften: Poppins (Sans), Abril Fatface (Serif)
- Responsive mit Mobile-First Ansatz
- Bottom Navigation auf Mobile


tig! So funktioniert das Template:
Neues Projekt hinzufügen
1. Daten in src/lib/projects.ts hinzufügen:
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
    { title: "Entstehung", text: "..." },
  ],
  credits: [
    { role: "Regie", name: "Name" },
  ],
  links: [
    { platform: "Spotify", url: "https://..." },
  ],
}
2. Bild nach public/images/ kopieren
3. Portfolio-Übersicht in src/app/portfolio/page.tsx ergänzen
Das wars! Die Seite wird automatisch erstellt unter /portfolio/projekt-name.
