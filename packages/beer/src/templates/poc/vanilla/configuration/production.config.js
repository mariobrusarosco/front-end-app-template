const path = require('path')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

// Loaders
const commonLoaders = require('../loaders/common')
const productionLoaders = require('../loaders/production')

// Plugins
const commonPlugins = require('../plugins/common')
const productionPlugins = require('../plugins/production')

// Webpacks's Configurations
const commonConfig = require('./common.config')
const productionConfig = () => ({
  mode: 'production',
  // devtool: 'eval-source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  optimization: {
    // runtimeChunk: 'single', // @TODO Check the purpose of these option
    splitChunks: {
      // chunks: 'all',
			cacheGroups: {
				vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
				}
			},
    }
  },
  plugins: [
    ...commonPlugins,
    ...productionPlugins,
  ],
  module: {
    rules: [
      ...commonLoaders,
      ...productionLoaders,
    ]
  },
})

// Merging Common and Production configurations
module.exports = Object.assign(commonConfig() , productionConfig())
