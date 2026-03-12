import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Datenschutzerklärung von Luis Lessing.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-8 lg:px-16">
      <h1 className="text-4xl lg:text-5xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
        Impressum
      </h1>
      <div className="w-16 h-0.5 bg-[#A0522D] mb-12" />

      <div className="max-w-2xl space-y-12 text-stone-600 leading-relaxed">

        {/* Angaben */}
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-stone-400">Angaben gemäß § 5 DDG</p>
          <p className="text-stone-800">
            Luis Lessing<br />
            Moltkestraße 20<br />
            32105 Bad Salzuflen<br />
            Deutschland
          </p>
          <p className="text-stone-800">
            Telefon: <a href="tel:+491753353204" className="hover:underline">+49 175 3353204</a><br />
            E-Mail: <a href="mailto:mail@luislessing.de" className="hover:underline">mail@luislessing.de</a>
          </p>
          <p>
            Diese Website dient der Präsentation künstlerischer und kreativer Projekte im Bereich Theater und Hörspiel. Es handelt sich um ein privates, nicht-gewerbliches Portfolio.
          </p>
        </section>

        {/* Haftungsausschluss */}
        <section className="space-y-6 border-t border-stone-200 pt-10">
          <h2 className="text-2xl text-stone-800" style={{ fontFamily: "var(--font-abril)" }}>
            Haftungsausschluss
          </h2>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Haftung für Inhalte</h3>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Haftung für Links</h3>
            <p>
              Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section className="space-y-4 border-t border-stone-200 pt-10">
          <h2 className="text-2xl text-stone-800" style={{ fontFamily: "var(--font-abril)" }}>
            Urheberrecht
          </h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht-kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>
        </section>

        {/* Datenschutz */}
        <section className="space-y-6 border-t border-stone-200 pt-10">
          <h2 className="text-2xl text-stone-800" style={{ fontFamily: "var(--font-abril)" }}>
            Datenschutz
          </h2>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Verantwortlicher</h3>
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p className="mt-2 text-stone-800">
              Luis Lessing<br />
              Moltkestraße 20<br />
              32105 Bad Salzuflen<br />
              <a href="mailto:mail@luislessing.de" className="hover:underline">mail@luislessing.de</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Welche Daten wir erheben</h3>
            <div className="space-y-4">
              <p>
                <span className="font-medium text-stone-800">Hosting:</span> Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA. Beim Besuch der Website werden dabei technisch notwendige Daten (u.a. IP-Adresse, Browsertyp, Zugriffszeitpunkt) an Server von Vercel übertragen. Vercel agiert dabei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Da Vercel in den USA ansässig ist, erfolgt eine Datenübertragung in ein Drittland. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert, sodass ein angemessenes Datenschutzniveau gewährleistet ist. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">vercel.com/legal/privacy-policy</a>
              </p>
              <p>
                <span className="font-medium text-stone-800">Server-Logfiles:</span> Beim Besuch dieser Website werden automatisch Informationen in Server-Logfiles gespeichert (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum und Uhrzeit). Diese Daten sind nicht einer bestimmten Person zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
              </p>
              <p>
                <span className="font-medium text-stone-800">Kontaktformular:</span> Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail-Adresse und Ihre Nachricht erhoben und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die Daten werden nicht an Dritte weitergegeben und nach Abschluss der Kommunikation gelöscht.
              </p>
              <p>
                <span className="font-medium text-stone-800">Vercel Analytics:</span> Diese Website nutzt Vercel Analytics zur Analyse des Nutzerverhaltens. Die Daten werden anonymisiert erhoben, es werden keine Cookies gesetzt und keine personenbezogenen Daten gespeichert. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">vercel.com/legal/privacy-policy</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Cookies</h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies und keine Cookies zu Werbezwecken. Vercel Analytics arbeitet cookielos. Es können technisch notwendige Session-Daten entstehen, die jedoch keine personenbezogenen Informationen enthalten und nicht dauerhaft gespeichert werden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Rechtsgrundlage</h3>
            <p>
              Die Verarbeitung der Kontaktformular-Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Das Hosting sowie die Server-Logfiles werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website) verarbeitet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Wenden Sie sich dazu jederzeit an <a href="mailto:mail@luislessing.de" className="hover:underline">mail@luislessing.de</a>.
            </p>
            <p className="mt-3">
              Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Behörde für Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (<a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="hover:underline">ldi.nrw.de</a>).
            </p>
          </div>
        </section>

        <p className="text-xs text-stone-400 border-t border-stone-200 pt-8">Stand: März 2026</p>
      </div>
    </div>
  );
}
