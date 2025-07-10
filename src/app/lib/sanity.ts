import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// Optimized Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true, // Enable CDN for better performance
  perspective: 'published', // Only fetch published content
  stega: {
    enabled: false, // Disable in production for better performance
    studioUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : undefined,
  },
});

// Optimized image URL builder with caching
const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder
    .image(source)
    .auto('format') // Automatic format selection (WebP, AVIF)
    .fit('max') // Better image optimization
    .quality(80); // Optimal quality vs file size balance
};
