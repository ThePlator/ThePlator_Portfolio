/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'plus.unsplash.com',
      'pbs.twimg.com',
    ],
  },
};

export default nextConfig;
