/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  cssModules: true, // Add this line to enable CSS modules
  publicRuntimeConfig: {
    App_Name: "First Website",
    API_DEVELOPMENT: "http://localhost:8000/",
    PRODUCTION: false,
  },
};

module.exports = nextConfig;
