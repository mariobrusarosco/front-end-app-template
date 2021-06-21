const fs = require('fs')

const getWebpackCommonLoaders = require('../webpack-definations/common-loaders')

const createCommonLoaders = (loadersAnswers) => {
  const { loaders, requireStatements } = getWebpackCommonLoaders(loadersAnswers)
  const loadersFileStream = fs.createWriteStream(
    './webpack/loaders/common.js',
  );
  loadersFileStream.write(requireStatements.join(';\n'))

  loadersFileStream.write("\n\nconst commonLoaders = [\n\t")
  loadersFileStream.write(loaders.join(',\n\t'))
  loadersFileStream.write("\n];")

  loadersFileStream.write("\n\nmodule.exports = commonLoaders;")

  loadersFileStream.end()
}


const createWebpackLoadersFile = (loadersAnswers) => {
  createCommonLoaders(loadersAnswers)
  // TODO mentLoaders(loadersAnswers)
  // TODO createProductionLoaders(loadersAnswers)
}


module.exports = createWebpackLoadersFile
