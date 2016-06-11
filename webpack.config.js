var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: [
    './entry.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [ new HtmlWebpackPlugin() ],
  eslint: {
    formatter: require("eslint-friendly-formatter")
  }
}
