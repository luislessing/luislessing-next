"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortfolioProject } from "@/lib/projects";

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="group block relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs uppercase tracking-widest mb-1 text-stone-300">
                {project.category} · {project.year}
              </p>
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-abril)" }}>
                {project.title}
              </h2>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
