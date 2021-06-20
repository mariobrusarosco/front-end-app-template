const path = require('path')

const getWebpackCommonConfiguration = configurationAnswers => {

  return {
    entry: {
      'main': [
        './src/index.js'
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      modules: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ]
    }
  }
}


module.exports = getWebpackCommonConfiguration
