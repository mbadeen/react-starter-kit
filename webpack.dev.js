const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../src',
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
