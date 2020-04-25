module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|mov)$/,
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
    },
    {
      test: /\.(mov|mp4)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          fallback: "file-loader",
          publicPath: "/_next/static/videos",
          outputPath: "static/videos/",
          name: "[name]-[hash].[ext]"
        }
      }
    }
    );
    config.resolve.modules.push(__dirname)

    return config;
  }
};
