const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

const productionPlugins = [
  new MiniCssExtractPlugin({
    filename: "[name]-[contenthash].css",
    chunkFilename: "[id]-[contenthash].css",
  }),
  new OptimizeCSSAssetsPlugin({}),
  new CompressionPlugin({
    exclude: /node_modules/,
    cache: true,
    algorithm: 'gzip'
  }),
  new BrotliPlugin(),
]

module.exports = productionPlugins
