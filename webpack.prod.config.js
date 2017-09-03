const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, "lib")

const MODULE_FILENAME = 'demoModule.js'
const LIBRARY = 'demoModule'

module.exports = {
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    path: BUILD_PATH,
    filename: MODULE_FILENAME,
    library: LIBRARY,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        loader: "eslint-loader",
        test: /\.(js)$/,
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js)$/,
        include: APP_PATH,
        use: {
          loader: "babel-loader?cacheDirectory=true",
        }
      },
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        pure_funcs: ['console.log']
      },
      beautify: false,
      sourceMap: false
    }),
  ]
}