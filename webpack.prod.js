const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
   module: {
      rules: [
         {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader'
            ]
         }
      ]
   },
   resolve: {
      extensions: ['*', '.js', '.jsx']
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new MiniCssExtractPlugin()
   ],
   
   // this output setting because of absolute path
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
};