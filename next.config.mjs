/** @type {import('next').NextConfig} */
const nextConfig = {
  // unoptimized: true,
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
