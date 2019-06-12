const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      title: 'react-starter-kit',
      template: path.join(path.resolve(__dirname, './src'), 'index.html')
    })
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|svg|woff|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
