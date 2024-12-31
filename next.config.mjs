/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['betis25.s3.ap-southeast-2.amazonaws.com'],
  },
};

export default nextConfig;
