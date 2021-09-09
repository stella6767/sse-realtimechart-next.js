module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // {
      //   source: "/:path*",
      //   destination: "http://bilabcsapi.lunalabs.net/:path*", // Proxy to Backend
      // },
      {
        source: "/:path*",
        destination: "http://localhost:8088/:path*", // Proxy to Backend
      },
      {
        source: "/다른주소:path*",
        destination: "http://다른주소/:다른주소*", // Proxy to Backend
      },
    ];
  },
};
