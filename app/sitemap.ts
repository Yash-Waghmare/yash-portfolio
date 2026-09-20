import { SITE_URL } from "@/content/profile";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/work",
    "/work/accenture-modernization",
    "/work/land-compass",
    "/work/earlier-projects",
    "/skills",
    "/contact",
    "/resume",
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
