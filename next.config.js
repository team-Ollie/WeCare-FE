/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["https://team-ollie.github.io/WeCare-FE/"],
    loader: "default",
    path: "/public/",
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  output: "export",
};

module.exports = nextConfig;
