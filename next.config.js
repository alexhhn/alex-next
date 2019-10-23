const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  cssModules: true,

  //* https://github.com/zeit/next-plugins/tree/master/packages/next-css
  // local scoped CSS modules
  
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }

})


// module.exports = {
//   webpack: (config, { defaultLoaders }) => {
//     config.module.rules.push({
//       test: /\.css$/,
//       use: [
//         defaultLoaders.babel,
//         {
//           loader: require('styled-jsx/webpack').loader,
//         }
//       ]
//     })
//     return config
//   }
// }