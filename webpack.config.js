const webpack = require("webpack");
const MiniCssExtractPluin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPluin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPluin()
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },

  devServer: {
    port: 3000,
    contentBase: "./dist",
    hot: true
  }
};
