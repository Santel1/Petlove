/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ftp.goit.study", "www.nytimes.com", "media4.giphy.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
