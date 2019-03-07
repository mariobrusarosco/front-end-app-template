const webpack = require('webpack')
const path = require('path')
const config = require('dotenv').config()
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')

// const {
//   APP_NAME,
//   TEST
// } = process.env

const commonPlugins = [
  new HtmlWebpack({
		template: path.resolve('src', 'index.html')
  }),
  new CleanWebpack(['dist'], {
		root: process.cwd()
  }),
  new webpack.ProvidePlugin({
    React: 'react',
		Component: ['react', 'Component'] // Just an example of providing only some parts of a Library/Module
  }),
  new webpack.DefinePlugin({
    // APPLICATION: JSON.stringify({ APP_NAME })
    APP_NAME: JSON.stringify('Webpack Boilterplate')
  })
]

module.exports = commonPlugins
