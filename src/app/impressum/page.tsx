import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Luis Lessing - Kontaktinformationen und rechtliche Hinweise.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-8 lg:px-16">
      <h1 className="text-4xl lg:text-5xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
        Impressum
      </h1>
      <div className="w-16 h-0.5 bg-[#A0522D] mb-8" />
      
      <div className="max-w-2xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-wider text-stone-400 mb-2">Angaben gemäß § 5 DDG</p>
          <p className="text-stone-800 text-lg">
            Luis Lessing<br />
            Moltkestraße 20<br />
            32105 Bad Salzuflen
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-stone-400 mb-2">Kontakt</p>
          <p className="text-stone-800">
            Telefon: <a href="tel:+491753353204" className="hover:underline">+49 175 3353204</a><br />
            E-Mail: <a href="mailto:mail@luislessing.de" className="hover:underline">mail@luislessing.de</a>
          </p>
        </div>

        <div className="pt-8 border-t border-stone-200">
          <h2 className="text-xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
            Haftungsausschluss
          </h2>
          
          <h3 className="font-semibold text-stone-800 mb-2">Haftung für Inhalte</h3>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="font-semibold text-stone-800 mb-2">Haftung für Links</h3>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="font-semibold text-stone-800 mb-2">Urheberrecht</h3>
          <p className="text-stone-600 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
}
