import type { MetadataRoute } from "next";
import { SITE_URL, packages } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/packages", "/contact"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const packageRoutes = packages.map((pkg) => ({
    url: `${SITE_URL}/packages/${pkg.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...packageRoutes];
}
