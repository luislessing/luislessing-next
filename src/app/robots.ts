import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // KI-Crawler blockieren
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },
      {
        userAgent: "Claude-Web",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "PerplexityBot",
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",
        disallow: ["/"],
      },
      {
        userAgent: "Applebot-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "Diffbot",
        disallow: ["/"],
      },
      {
        userAgent: "cohere-ai",
        disallow: ["/"],
      },
      {
        userAgent: "AI2Bot",
        disallow: ["/"],
      },
      {
        userAgent: "FacebookBot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://luislessing.de/sitemap.xml",
  };
}
