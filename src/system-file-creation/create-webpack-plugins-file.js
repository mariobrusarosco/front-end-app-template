const fs = require('fs')

const getWebpackCommonPlugins = require('../webpack-definations/common-plugins')

const createCommonPlugins = (pluginsAnswers) => {
  const { plugins, requireStatements } = getWebpackCommonPlugins(pluginsAnswers)
  const pluginsFileStream = fs.createWriteStream(
    './webpack/plugins/common.js',
  );

  pluginsFileStream.write(requireStatements.join(';\n'))

  pluginsFileStream.write("\n\nconst commonPlugins = [")
  pluginsFileStream.write(plugins.join(','))
  pluginsFileStream.write("];")

  pluginsFileStream.write("\n\nmodule.exports = commonPlugins;")

  pluginsFileStream.end()
}


const createWebpackLoadersFile = (pluginsAnswers) => {
  createCommonPlugins(pluginsAnswers)
  // createDevelopmentPlugins(pluginsAnswers)
  // createProductionPlugins(pluginsAnswers)
}


module.exports = createWebpackLoadersFile
