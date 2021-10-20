module.exports = {
  apps: [
    {
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      watch: true,
      env_production: {
        PORT: 3300,
        NODE_ENV: "production",
      },
    },
  ],
};
