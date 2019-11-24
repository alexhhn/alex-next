module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          fallback: "file-loader",
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
          name: "[name]-[hash].[ext]"
        }
      }
    });
    return config;
  }
};
