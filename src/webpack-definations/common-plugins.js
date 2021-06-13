// const webpack = require('webpack')
const path = require('path')
// const config = require('dotenv').config()

// const CleanWebpack = require('clean-webpack-plugin')

// const {
//   APP_NAME,
//   TEST
// } = process.env

// const commonPlugins = [

//   new CleanWebpack(['dist'], {
// 		root: process.cwd()
//   }),
//   new webpack.ProvidePlugin({
//     React: 'react',
// 		Component: ['react', 'Component'] // Just an example of providing only some parts of a Library/Module
//   }),
//   new webpack.DefinePlugin({
//     // APPLICATION: JSON.stringify({ APP_NAME })
//     APP_NAME: JSON.stringify('Webpack Boilterplate')
//   })
// ]

// Require Statements
const requireStatements = [
  `const path = require('path')`,
  `const HtmlWebpack = require('html-webpack-plugin')`
];

// Plugins
const HtmlWebpackPlugin = `
  new HtmlWebpack({
    template: path.resolve('src', 'index.html')
  })
`

const getWebpackCommonPlugins = pluginsAnswers => {
  return {
    requireStatements,
    plugins: [
      HtmlWebpackPlugin
    ]
  }
}


module.exports = getWebpackCommonPlugins
