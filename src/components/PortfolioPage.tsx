"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, ExternalLink, ArrowLeft } from "lucide-react";
import { PortfolioProject } from "@/lib/projects";

interface PortfolioPageProps {
  project: PortfolioProject;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function PortfolioPage({ project }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] lg:h-[60vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-6 left-8 lg:left-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Projekte
          </Link>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 text-white">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-sm uppercase tracking-widest mb-2 text-stone-300"
          >
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-abril)" }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      <div className="py-12 lg:py-16 px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div {...fadeUp(0.1)}>
              <div className="w-16 h-0.5 bg-[#A0522D] mb-6" />
              <p className="text-lg text-stone-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {project.content.map((section, index) => (
              <motion.div key={index} {...fadeUp(0.15 + index * 0.1)}>
                <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
                  {section.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {section.text}
                </p>
              </motion.div>
            ))}

            {project.credits && project.credits.length > 0 && (
              <motion.div {...fadeUp(0.3)}>
                <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-abril)" }}>
                  Credits
                </h2>
                <div className="text-stone-600 space-y-2">
                  {project.credits.map((credit, index) => (
                    <p key={index}>
                      <span className="text-stone-800 font-medium">{credit.role}:</span> {credit.name}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-stone-100 p-6 rounded-sm lg:sticky lg:top-8">
              <h3 className="text-sm uppercase tracking-wider text-stone-400 mb-6">Projekt-Details</h3>

              <div className="space-y-4 mb-8">
                {project.details.concept && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Konzept</p>
                    <p className="text-stone-800">{project.details.concept}</p>
                  </div>
                )}
                {project.details.genre && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Genre</p>
                    <p className="text-stone-800">{project.details.genre}</p>
                  </div>
                )}
                {project.details.length && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Länge</p>
                    <p className="text-stone-800">{project.details.length}</p>
                  </div>
                )}
                {project.details.release && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Release</p>
                    <p className="text-stone-800">{project.details.release}</p>
                  </div>
                )}
                {project.details.edition && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Edition</p>
                    <p className="text-stone-800">{project.details.edition}</p>
                  </div>
                )}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="border-t border-stone-200 pt-6 space-y-3">
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">Anhören</p>
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center gap-3 px-4 py-3 bg-[#A0522D] text-white rounded-sm hover:bg-[#8B4513] transition-colors"
                    >
                      <Music size={18} />
                      <span>{link.platform}</span>
                      <ExternalLink size={14} className="ml-auto" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
