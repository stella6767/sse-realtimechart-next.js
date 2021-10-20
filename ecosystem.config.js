module.exports = {
  apps: [
    {
      name: "bilab",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3300",
      exec_mode: "cluster",
      instances: 0,
      watch: true,
      env_production: {
        PORT: 3300,
        NODE_ENV: "production",
      },
    },
  ],
};
