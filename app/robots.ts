import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://aminer-rhammi.netlify.app/sitemap.xml",
    host: "https://aminer-rhammi.netlify.app",
  };
}
