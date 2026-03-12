import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioPage from "@/components/PortfolioPage";
import { projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Luis Lessing`,
      description: project.description,
      url: `https://luislessing.de/portfolio/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  return <PortfolioPage project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
