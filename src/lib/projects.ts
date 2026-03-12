export interface ProjectDetails {
  concept?: string;
  genre: string;
  length?: string;
  release: string;
  edition?: string;
}

export interface ProjectCredits {
  role: string;
  name: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  details: ProjectDetails;
  content: {
    title: string;
    text: string;
  }[];
  credits?: ProjectCredits[];
  links?: {
    platform: string;
    url: string;
  }[];
}

export const projects: PortfolioProject[] = [
  {
    slug: "demut",
    title: "Demut",
    category: "Hörspiel",
    year: "2025",
    image: "/images/demut.jpg",
    description: "Ein immersives Hörspiel über die Kunst des stillen Beobachtens.",
    details: {
      concept: "Luis Lessing",
      genre: "Hörspiel",
      length: "18 Minuten",
      release: "Februar 2025",
      edition: "Zwiegespräch e.V.",
    },
    content: [
      {
        title: "Über das Stück",
        text: "In einem alten Schaukelstuhl, während die Stadt langsam erwacht, erzählt ein Mann von einem Leben der stillen Beobachtung. Zwischen knarrenden Dielen und dem Flüstern des Windes in den Vorhängen entfaltet sich eine Geschichte über wahre Größe - nicht die, die sich über andere erhebt, sondern jene, die wie ein alter Baum Wurzeln schlägt und dennoch in den Himmel wächst.",
      },
      {
        title: "Künstlerische Gestaltung",
        text: "Das Stück wurde in intensiver Studioarbeit entwickelt, mit besonderem Fokus auf die authentische Wiedergabe der intimen Atmosphäre.",
      },
    ],
    credits: [
      { role: "Sounddesign", name: "Adrean T. Gruebner" },
      { role: "Sprecher", name: "Adrean T. Gruebner" },
      { role: "Musik", name: "Luis Lessing" },
      { role: "Tonregie", name: "Luis Lessing" },
    ],
    links: [
      { platform: "Spotify", url: "#" },
      { platform: "Apple Music", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
];
