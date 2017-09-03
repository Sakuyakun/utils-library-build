const path = require("path");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, "lib")
const MODULE_FILENAME = 'demoModule.js'

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: './src/entry.jsx'
  },
  output: {
    path: BUILD_PATH,
    filename: MODULE_FILENAME,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        loader: "eslint-loader",
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: APP_PATH,
        use: {
          loader: "babel-loader?cacheDirectory=true",
        }
      },
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    compress: true,
    port: 3005
  }
}