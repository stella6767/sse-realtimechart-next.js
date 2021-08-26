module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://bilabcsapi.lunalabs.net/:path*", // Proxy to Backend
      },
    ];
  },
};
