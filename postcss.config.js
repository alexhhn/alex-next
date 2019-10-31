const path = require("path");

module.exports = {
  plugins: {
    //* Global import for css
    "postcss-import": { path: [path.resolve(__dirname, "globals")] },
    "postcss-css-variables": {},
    "postcss-preset-env": {}
  }
};
