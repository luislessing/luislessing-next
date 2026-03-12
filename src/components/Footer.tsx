import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-8 lg:px-16 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:mail@luislessing.de" className="hover:text-white transition-colors">
                  mail@luislessing.de
                </a>
              </li>
              <li>
                <a href="tel:+491753353204" className="hover:text-white transition-colors">
                  +49 175 3353204
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Über mich</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-xs text-center">
          <p>© {currentYear} Luis Lessing. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
