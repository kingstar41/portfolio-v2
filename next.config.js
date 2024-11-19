// Import the withMDX function using ES module syntax
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
