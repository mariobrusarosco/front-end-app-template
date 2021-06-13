const path = require('path')


const getWebpackCommonConfiguration = configurationAnswers => {

  return {
    entry: {
      'main': [
        '@babel/polyfill',
        './src/index.js'
      ],
    },
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('src','boilerplate-features'),
        path.resolve('node_modules'),
      ]
    }
  }
}


module.exports = getWebpackCommonConfiguration
