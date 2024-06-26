const FaroSourceMapUploaderPlugin = require("@grafana/faro-webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    config.plugins.push(
      new FaroSourceMapUploaderPlugin({
        appName: process.env.REACT_APP_FARO_APP_NAME,
        endpoint: process.env.REACT_APP_FARO_ENDPOINT,
        appId: process.env.REACT_APP_FARO_APP_ID,
        stackId: process.env.REACT_APP_FARO_STACK_ID,
        apiKey: process.env.REACT_APP_FARO_API_KEY,
        gzipContents: true,
      })
    );
    return config;
  },
};
