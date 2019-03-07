const path = require('path')

const developmentLoaders = [
  {
    test: /\.css$/,
    include: path.resolve('src'),
    use: [
      'style-loader',
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

module.exports = developmentLoaders
