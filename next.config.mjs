/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",   // <--- IMPORTANT FOR NETLIFY SSR

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
};

export default nextConfig;
