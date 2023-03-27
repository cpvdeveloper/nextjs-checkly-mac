/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["api.checklyhq.com"],
  },
};

module.exports = nextConfig;
