/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost', '8f5fcdb0495f.ngrok-free.app'],
  },
};

module.exports = nextConfig;
export default nextConfig;