const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: "./src/js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        // test: /\.html/,
        // use: ["html-loader"],
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|mp3)$/i,
        include: path.resolve(__dirname, "assets"),
        type: "asset/resource", //Asset module, not required loader!
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        // include: path.resolve(__dirname, "src/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
