const path = require('path')

const commonLoaders = [
	{
    test: /\.js$/,
    include: path.resolve('src'),
		exclude: /node_modules/,
		use: 'babel-loader'
	},
  {
    test: /\.(ttf|woff|woff2|oet|otf)$/,
    include: path.resolve('src','assets', 'fonts'),
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    include: path.resolve('src','assets', 'images'),
    use: [
      'file-loader'
    ]
  },
]

module.exports = commonLoaders
