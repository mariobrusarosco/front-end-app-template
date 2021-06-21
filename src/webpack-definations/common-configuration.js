const path = require('path')

const getWebpackCommonConfiguration = configurationAnswers => {
  const { scriptsAnswers: { scripts } }  = configurationAnswers
  const targeScript = scripts.join('')

  return {
    entry: {
      'main': [
        `./src/index.${targeScript}`
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
