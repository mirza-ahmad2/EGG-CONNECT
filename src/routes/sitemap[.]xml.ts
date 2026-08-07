import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "../lib/site";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/mission", changefreq: "monthly", priority: "0.8" },
          { path: "/focus-areas", changefreq: "monthly", priority: "0.8" },
          { path: "/stakeholders", changefreq: "monthly", priority: "0.8" },
          { path: "/get-involved", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${SITE_URL}${e.path === "/" ? "" : e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
