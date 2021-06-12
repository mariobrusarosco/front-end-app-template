const { inspect } = require('util');
const fs = require('fs')

const getWebpackCommonLoaders = require('../../webpack-definations/common-loaders')


// {
//   test: /\.js$/,
//   include: path.resolve('src'),
//   exclude: /node_modules/,
//   use: 'babel-loader',
// }

const createDevelopmentLoaders = config => {
  const loadersForFonts = defineFontsLoader(config.fontFormats)
  const loaders = [loadersForFonts]

  return loaders
}


const createProductionLoaders = config => {
  const loadersForFonts = defineFontsLoader(config.fontFormats)
  const loaders = [loadersForFonts]

  return loaders
}


const createCommonLoaders = (loadersAnswers) => {
  const commonLoaders = getWebpackCommonLoaders(loadersAnswers)
  const normalizedLoaders = inspect(commonLoaders)

  const loadersFileStream = fs.createWriteStream(
    './webpack/loaders/common.js',
  );

  loadersFileStream.write(Buffer.from(`const commonLoaders = ${normalizedLoaders};`))
  loadersFileStream.write("\n\nmodule.exports = commonLoaders;")

  loadersFileStream.end()
}


const createWebpackLoadersFile = (loadersAnswers) => {
  createCommonLoaders(loadersAnswers)
  // createDevelopmentLoaders(loadersAnswers)
  // createProductionLoaders(loadersAnswers)
}


module.exports = createWebpackLoadersFile
