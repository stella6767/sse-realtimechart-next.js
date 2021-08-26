module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://bilabcsapi.lunalabs.net/test/:path*", // Proxy to Backend
      },
    ];
  },
};
