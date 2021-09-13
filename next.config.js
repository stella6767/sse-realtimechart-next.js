process.env.NODE_ENV === "production"
  ? (module.exports = {
      reactStrictMode: false,
      async rewrites() {
        return [
          {
            source: "/:path*",
            destination: "http://bilabcsapi.lunalabs.net/:path*", // Proxy to 배포 Backend
          },
        ];
      },
    })
  : (module.exports = {
      reactStrictMode: false,
      async rewrites() {
        return [
          {
            source: "/:path*",
            destination: "http://localhost:8081/:path*", // Proxy to Backend
          },

          {
            source: "/다른주소:path*",
            destination: "http://다른주소/:다른주소*", // Proxy to Backend
          },
        ];
      },
    });
