/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost', '81bcab4457f6.ngrok-free.app'],
  },
};
export default nextConfig;