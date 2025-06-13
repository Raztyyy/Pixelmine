import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const jobData = [
  {
    id: 1,
    title: "Testing & Quality Assurance",
    slug: "testing-quality-assurance",
  },
  {
    id: 3,
    title: "React Native Developer",
    slug: "react-native-developer",
  },
];

export const newsData = [
  {
    id: "001",
    title: "Best conversion rate",
    slug: "best-conversion-rate",
    author: "Pixelmine OPC",
  },
  {
    id: "002",
    title: "Launch of Pixelmine 2.0",
    slug: "launch-of-pixelmine-2",
    author: "Pixelmine OPC",
  },
  {
    id: "003",
    title:
      "世界を驚かす次代のエンジニア常識をつくり変える分散型SNS「Pixelmine」を開発",
    slug: "",
    author: "Pixelmine OPC",
  },
];

// For __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://pixelmine.org";

const staticRoutes = [
  "/",
  "/concept",
  "/design-implementation",
  "/network-incentives",
  "/democratic-system",
  "/roadmap",
  "/about-us",
  "/news-events",
  "/careers",
  "/contact-us",
  "/sign-up",
  "/terms-and-conditions",
  "/child-sexual-abuse-policy",
  "/commercial-law",
  "/privacy-policy",
];

// Extract slugs only (filter out empty slugs if any)
const newsSlugs = newsData
  .map((item) => item.slug)
  .filter((slug) => typeof slug === "string" && slug.length > 0);

const careerSlugs = jobData
  .map((item) => item.slug)
  .filter((slug) => typeof slug === "string" && slug.length > 0);

const urls = [];

// Add static URLs
staticRoutes.forEach((route) => {
  urls.push(`${BASE_URL}${route}`);
});

// Add dynamic news URLs
newsSlugs.forEach((slug) => {
  urls.push(`${BASE_URL}/news-events/${slug}`);
});

// Add dynamic career URLs
careerSlugs.forEach((slug) => {
  urls.push(`${BASE_URL}/careers/${slug}`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);

console.log("✅ sitemap.xml generated successfully!");
