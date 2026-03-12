"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram, Github, Music, Home, User, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "Über mich", icon: User },
  { href: "/portfolio", label: "Portfolio", icon: FolderOpen },
  { href: "/contact", label: "Kontakt", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 w-48 h-screen bg-stone-900 text-white flex-col z-40">
        <div className="p-6 border-b border-white/10">
          <Link href="/">
            <Image
              src="/images/logo-2.png"
              alt="Luis Lessing"
              width={48}
              height={48}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="w-12 h-auto mx-auto"
            />
          </Link>
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors ${
                      pathname === item.href ? "bg-white/10 border-l-2 border-[#A0522D]" : ""
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-neutral-400 transition-colors p-1">
              <Music size={20} />
            </a>
            <a href="https://instagram.com/lucidmicrobe" className="hover:text-neutral-400 transition-colors p-1">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/luislessing" className="hover:text-neutral-400 transition-colors p-1">
              <Github size={20} />
            </a>
          </div>
          <Link
            href="/impressum"
            className={`block text-sm text-stone-400 hover:text-white transition-colors text-center ${
              pathname === "/impressum" ? "text-white" : ""
            }`}
          >
            Impressum
          </Link>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-white/10 z-50 lg:hidden safe-area-pb">
        <ul className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center py-3 px-4 transition-colors ${
                    isActive ? "text-white" : "text-stone-400 hover:text-white"
                  }`}
                >
                  <Icon size={22} />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
