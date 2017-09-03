const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, "lib")

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: './src/component/index.js',
    vendor :['react','react-dom']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].jsx'
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
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: true,
    //     pure_funcs: ['console.log']
    //   },
    //   beautify: false,
    //   sourceMap: false
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        return module.resource && /node_modules/.test(module.resource)
      }
    })
  ]
}