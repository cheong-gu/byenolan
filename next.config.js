const { withTheme } = require('@emotion/react');

/** @type {import('next').NextConfig} */
module.exports = withTheme({
  reactStrictMode: true,
  webpack: config => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
});