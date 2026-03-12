"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HeroContent() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 lg:px-16">
      <motion.p {...fadeUp(0.1)} className="text-white/80 text-sm tracking-widest mb-4 uppercase">
        Durch die Augen der Weisen
      </motion.p>
      <motion.h1
        {...fadeUp(0.2)}
        className="text-5xl lg:text-7xl text-white font-normal mb-4"
        style={{ fontFamily: "var(--font-abril)" }}
      >
        <Link href="/portfolio/demut" className="hover:underline">
          Demut
        </Link>
      </motion.h1>
      <motion.p {...fadeUp(0.3)} className="text-white/80 text-sm mb-8">
        Ein Hörspiel von Luis Lessing
      </motion.p>
      <motion.div {...fadeUp(0.4)}>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all w-max"
        >
          <span>Portfolio entdecken</span>
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
