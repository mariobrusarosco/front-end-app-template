const webpack = require('webpack')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const developmentPlugins = [
	new webpack.HotModuleReplacementPlugin(),
	// new BundleAnalyzer({
	// 	analyzerMode: 'static'
	// })
]

module.exports = developmentPlugins
