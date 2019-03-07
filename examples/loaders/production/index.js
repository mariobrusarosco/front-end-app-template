const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const productionLoaders = [
	{
    test: /\.css$/,
    include: path.resolve('src'),
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          // localIdentName: '[name]__[hash:base64:8]',
          }
      },
    ]
  }
]

module.exports = productionLoaders
