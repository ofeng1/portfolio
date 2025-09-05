import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  webpack(config) {
    const assetRule = config.module.rules.find(
      (rule: any) => rule && typeof rule === "object" && rule.test?.test?.(".svg")  // eslint-disable-line @typescript-eslint/no-explicit-any
    );
    if (assetRule) assetRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { svgo: true } }],
    });

    return config;
  },
};

export default nextConfig;
