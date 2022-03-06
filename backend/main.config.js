// pm2 logs config file
// pm2 start main-pm2.config.js

module.exports = {
  apps: [
    {
      name: "main",
      script: "node server.js",
      output: "/dev/null",
      // output: "./logs/main-out.log",
      error: "./logs/main-error.log",
      log_date_format: "MMM DD hh:mm:ss A",
    },
  ],
};

