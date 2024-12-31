/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['betis25.s3.amazonaws.com'],
  },
};

export default nextConfig;
