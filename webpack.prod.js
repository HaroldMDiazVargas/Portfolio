const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].bundle.js", //"js/[name].[contenthash].bundle.js",
    // clean: true,
    clean: process.env.NODE_ENV === "production",
    assetModuleFilename: "assets/[contenthash][ext]", // [name][hash][ext] contenthash, fullhash, chunckhash, query
    // pathinfo: false, //Dev
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      hash: true,
      // templateParameters: {
      //   title: 'Manual de Webpack en Desarrolloweb',
      //   header: 'Aprendo Webpack en DesarrolloWeb.com',
      // }
    }),
    new MiniCssExtractPlugin({
      filename: "style.bundle.[contenthash].css", //style.bundle.[hash].css"
      chunkFilename: "[id].[hash].css", //"[id].[hash].css"
    }),
  ],

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  // optimization: {
  //   // moduleIds: "deterministic",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },

  //   // removeAvailableModules: false, //Dev
  //   // removeEmptyChunks: false, //Dev
  //   // splitChunks: false,
  // },
});
