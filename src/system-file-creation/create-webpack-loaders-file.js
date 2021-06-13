const fs = require('fs')

const getWebpackCommonLoaders = require('../webpack-definations/common-loaders')

// const createCommonLoadersOldApproach = (loadersAnswers) => {
//   const commonLoaders = getWebpackCommonLoaders(loadersAnswers)
//   const normalizedLoaders = inspect(commonLoaders)

//   const loadersFileStream = fs.createWriteStream(
//     './webpack/loaders/common.js',
//   );

//   loadersFileStream.write(Buffer.from(`const commonLoaders = ${normalizedLoaders};`))
//   loadersFileStream.write("\n\nmodule.exports = commonLoaders;")

//   loadersFileStream.end()
// }

const createCommonLoaders = (loadersAnswers) => {
  const { loaders, requireStatements } = getWebpackCommonLoaders(loadersAnswers)
  const loadersFileStream = fs.createWriteStream(
    './webpack/loaders/common.js',
  );
  loadersFileStream.write(requireStatements.join(';\n'))

  loadersFileStream.write("const commonLoaders = [\n\t")
  loadersFileStream.write(loaders.join(','))
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
