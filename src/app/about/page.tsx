import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Über Luis Lessing – Schauspieler, Regisseur und Hörspiel-Produzent. Langjährige Theatererfahrung bei der Freilichtbühne Korbach und dem Ensemble Zwiegespräch e.V.",
  openGraph: {
    title: "Über mich | Luis Lessing",
    description: "Schauspieler, Regisseur und Hörspiel-Produzent aus Paderborn.",
    url: "https://luislessing.de/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-8 lg:px-16">
      <h1 className="text-4xl lg:text-5xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
        Über mich
      </h1>
      <div className="w-16 h-0.5 bg-[#A0522D] mb-8" />

      <div className="grid lg:grid-cols-2 gap-12">
        <AnimatedSection delay={0.1}>
          <div className="relative aspect-square lg:aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/me.jpg"
              alt="Luis Lessing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        <div className="flex flex-col justify-center">
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Seit vielen Jahren bin ich leidenschaftlich im Theater aktiv und habe dort meine Liebe zur Bühne und zum Erzählen von Geschichten entdeckt. Nun wage ich mich in die Welt des Hörspiels, um auch auf akustischer Ebene spannende, emotionale und fesselnde Erlebnisse zu schaffen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="text-2xl mb-4 mt-4" style={{ fontFamily: "var(--font-abril)" }}>
              Theater-Erfahrung
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="font-semibold text-stone-800">Hörspiele</h3>
                <p className="text-stone-500 text-sm mb-1">seit 2025</p>
                <p className="text-stone-600">
                  Debut: Demut. Mit der Gründung des Ensembles Zwiegespräch stand schnell die Idee im Raum auch Hörspiele zu produzieren.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div>
                <h3 className="font-semibold text-stone-800">Zwiegespräch e.V</h3>
                <p className="text-stone-500 text-sm mb-1">2024 - heute</p>
                <p className="text-stone-600">
                  Gründungsmitglied. Aus dem Abschlussprojekt eines Freundes gründete sich nach und nach ein neuer Theaterverein im Raum Paderborn. Wir brachten das Stück &quot;Kunst&quot; von Yasmina Reza auf die Bühne.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="font-semibold text-stone-800">Freilichtbühne Korbach e.V.</h3>
                <p className="text-stone-500 text-sm mb-1">1993 - heute</p>
                <p className="text-stone-600">
                  Meine Jugend. Meine erste kleine Synchronrolle hatte ich im Jahr 1993. Die Bühne war mein zweites Zuhause und ich wirkte bis 2016 jedes Jahr vor oder hinter der Bühne mit. Nach langer Pause beschloss ich 2024 mit dem 50er Jahre Musical &quot;Toast Hawaii&quot; wieder auf der Bühne zu stehen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
