import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/voxeltox" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/voxeltox/" : "",
};

export default nextConfig;
