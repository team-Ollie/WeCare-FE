/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://team-ollie.github.io/WeCare-FE"
    : "";

const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
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
  distDir: "dist",
  basePath: prefix,
  trailingSlash: true,
};

module.exports = nextConfig;
