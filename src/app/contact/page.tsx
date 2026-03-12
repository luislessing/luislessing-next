import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreib Luis Lessing eine E-Mail oder ruf an – offen für Projekte, Kollaborationen und alles dazwischen.",
  openGraph: {
    title: "Kontakt | Luis Lessing",
    description: "Schreib Luis Lessing eine E-Mail oder ruf an.",
    url: "https://luislessing.de/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-8 lg:px-16">
      <h1 className="text-4xl lg:text-5xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
        Kontakt
      </h1>
      <div className="w-16 h-0.5 bg-[#A0522D] mb-8" />

      <div className="max-w-2xl">
        <p className="text-lg text-stone-600 leading-relaxed">
          Hast du ein Projekt im Kopf oder möchtest du einfach nur Hallo sagen?
          Ich freue mich von dir zu hören.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6 mb-2">
          <a
            href="mailto:mail@luislessing.de"
            className="text-stone-500 hover:text-stone-800 transition-colors text-sm"
          >
            mail@luislessing.de
          </a>
          <a
            href="tel:+491753353204"
            className="text-stone-500 hover:text-stone-800 transition-colors text-sm"
          >
            +49 175 3353204
          </a>
        </div>

        <ContactForm />

        <div className="border-t border-stone-200 pt-8 mt-12">
          <Link href="/impressum" className="text-stone-400 hover:text-stone-600 transition-colors text-sm">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
}
