import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ausgewählte Arbeiten von Luis Lessing aus den Bereichen Theater und Hörspiel.",
  openGraph: {
    title: "Portfolio | Luis Lessing",
    description: "Ausgewählte Arbeiten aus den Bereichen Theater und Hörspiel.",
    url: "https://luislessing.de/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-8 lg:px-16">
      <h1 className="text-4xl lg:text-5xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
        Selected Works
      </h1>
      <p className="text-stone-500 mb-12 max-w-xl">
        Eine Auswahl meiner Arbeiten aus den Bereichen Theater und Hörspiel.
      </p>
      <PortfolioGrid projects={projects} />
    </div>
  );
}
