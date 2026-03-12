import type { Metadata } from "next";
import { Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luislessing.de"),
  title: {
    default: "Luis Lessing | Portfolio",
    template: "%s | Luis Lessing",
  },
  description: "Portfolio von Luis Lessing – Kreativer Entwickler, Designer und Audio-Produzent. Minimalistische Projekte mit Fokus auf Ästhetik und Bedeutung.",
  keywords: ["Luis Lessing", "Portfolio", "Webentwicklung", "Design", "Audio", "Hörspiel", "Demut", "Kreativ"],
  authors: [{ name: "Luis Lessing" }],
  creator: "Luis Lessing",
  publisher: "Luis Lessing",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://luislessing.de",
    siteName: "Luis Lessing",
    title: "Luis Lessing | Portfolio",
    description: "Portfolio von Luis Lessing – Kreativer Entwickler, Designer und Audio-Produzent.",
    images: [
      {
        url: "/images/demut.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Lessing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Lessing | Portfolio",
    description: "Portfolio von Luis Lessing – Kreativer Entwickler, Designer und Audio-Produzent.",
    images: ["/images/demut.jpg"],
  },
  verification: {
    // google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#171717" />
      </head>
      <body className={`${poppins.variable} ${abrilFatface.variable}`}>
        <Sidebar />
        <main className="lg:ml-48 min-h-screen flex flex-col pb-20 lg:pb-0">
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
