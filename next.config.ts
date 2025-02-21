import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/",
        port: ""
      }
    ]
  }
};

export default nextConfig;