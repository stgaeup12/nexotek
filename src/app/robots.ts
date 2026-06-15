import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.nexotek.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Prevent search engines from crawling API folders
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
