/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 วินาที
    pagesBufferLength: 2,
  },

};

export default nextConfig;
