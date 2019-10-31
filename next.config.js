const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
  /* config options here */
  cssModules: true,

  //* https://github.com/zeit/next-plugins/tree/master/packages/next-css
  // local scoped CSS modules

  cssLoaderOptions: {
    // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
    importLoaders: 1,
    localIdentName: "[name]-[local]-[hash:base64:5]"
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });
    // Here is the magic
    // We push our config into the resolve.modules array
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
