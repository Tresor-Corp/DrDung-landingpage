import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "page.widget.zalo.me",
        pathname: "/static/images/2.0/Logo.svg",
      },
    ],
  },
};

export default nextConfig;
