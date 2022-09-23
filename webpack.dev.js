const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].bundle.js",
    // clean: true,
    clean: process.env.NODE_ENV === "production",
    assetModuleFilename: "assets/[name][ext]", //hash, fullhash, chunckhash, query
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
      //   title: "Manual de Webpack en Desarrolloweb",
      //   header: "Aprendo Webpack en DesarrolloWeb.com",
      // },
    }),
    new MiniCssExtractPlugin({
      filename: "style.bundle.[name].css",
      chunkFilename: "[id].[name].css",
    }),
  ],

  optimization: {
    // moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },

    removeAvailableModules: false, //Dev
    removeEmptyChunks: false, //Dev
    // splitChunks: false,
  },
});
