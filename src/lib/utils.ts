import { client } from "@/app/lib/sanity";

// Cache for storing fetched data to reduce API calls
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: any;
  timestamp: number;
}

export const handlerLink: () => void = () => {
  const links = document.querySelectorAll("h1");
  const linkEl = document.querySelector("h1");
  linkEl?.classList.add("active");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      link?.classList.add("active");
    });
  });
};

// Optimized data fetching with caching and error handling
export const getAllData = async () => {
  const cacheKey = 'all-projects';
  const cached = cache.get(cacheKey) as CacheEntry;
  
  // Return cached data if it's still valid
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const query = `*[_type == "projects"] | order(_createdAt desc){
      title,
      "image": image.asset->url,
      desc,
      "slug": slug.current,
      tools,
      github,
      demo,
      _id
    }`;
    
    const data = await client.fetch(query, {}, {
      // Use CDN and cache for better performance
      cache: 'force-cache',
      next: { revalidate: 300 } // 5 minutes
    });
    
    // Cache the result
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    
    // Return cached data if available, even if expired
    if (cached) {
      return cached.data;
    }
    
    // Return empty array as fallback
    return [];
  }
};

// Optimized single data fetching with caching
export const getSingleData = async (slug: string) => {
  const cacheKey = `project-${slug}`;
  const cached = cache.get(cacheKey) as CacheEntry;
  
  // Return cached data if it's still valid
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const query = `*[_type == "projects" && slug.current == $slug]{
      title,
      "image": image.asset->url,
      desc,
      "slug": slug.current,
      tools,
      github,
      demo,
      _id
    }`;
    
    const data = await client.fetch(query, { slug }, {
      cache: 'force-cache',
      next: { revalidate: 300 }
    });
    
    // Cache the result
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    
    // Return cached data if available
    if (cached) {
      return cached.data;
    }
    
    return [];
  }
};

// Utility to clear cache when needed
export const clearCache = () => {
  cache.clear();
};

// Utility to preload critical data
export const preloadCriticalData = async () => {
  try {
    await getAllData();
  } catch (error) {
    console.error('Error preloading critical data:', error);
  }
};
