const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  require("dotenv").config();

  const apiUrl = process.env.DO_API_URL;
  const apiToken = process.env.DO_ACCESS_TOKEN;
  const apiHost = process.env.DO_HOST;
  const headers = {
    "Content-Type": "application/json",
    Authorization: apiToken,
    Accept: "application/json",
    Host: apiHost
  };

  // define http-proxy-middleware
  let DOProxy = createProxyMiddleware({
    target: apiUrl,
    changeOrigin: true,
    pathRewrite: {
      "^/api/": "/"
    },
    headers: headers
  });

  // define the route and map the proxy
  app.use("/api", DOProxy);
};
