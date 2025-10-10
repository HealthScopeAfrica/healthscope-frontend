// Meta data configuration for all pages
export const metaConfig = {
  home: {
    title: "HealthScope - Trusted Health Information",
    description: "Access reliable, evidence-based health information from verified medical professionals and healthcare organizations.",
    keywords: "health information, medical professionals, healthcare, Africa, trusted health content",
  },
  features: {
    title: "Features - HealthScope",
    description: "Discover comprehensive tools and resources designed to support your health journey with verified medical content.",
    keywords: "health features, medical tools, healthcare resources, health platform",
  },
  aboutUs: {
    title: "About Us - HealthScope", 
    description: "Learn about HealthScope's mission to empower African communities with reliable, evidence-based health information.",
    keywords: "about healthscope, health mission, medical platform, healthcare africa",
  },
  // Add more pages as needed
};

// Helper function to generate meta array
export function generateMeta(pageKey: keyof typeof metaConfig) {
  const config = metaConfig[pageKey];
  return [
    { title: config.title },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords },
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
  ];
}