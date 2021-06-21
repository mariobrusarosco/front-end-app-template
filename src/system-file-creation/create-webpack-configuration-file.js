const { inspect } = require('util');
const fs = require('fs')

const getWebpackCommonConfiguration = require('../webpack-definations/common-configuration')
const getWebpackDevelopmentConfiguration = require('../webpack-definations/development-configuration');

const createDevelopmentConfigurationFile = (configurationAnswers) => {
  const developmentConfiguration = getWebpackDevelopmentConfiguration(configurationAnswers)
  const normalizedLoaders = inspect(developmentConfiguration)

  const loadersFileStream = fs.createWriteStream(
    './webpack/configuration/development.js',
  );

  loadersFileStream.write(Buffer.from(`const developmentConfiguration = ${normalizedLoaders};`))
  loadersFileStream.write("\n\nmodule.exports = developmentConfiguration;")

  loadersFileStream.end()
}

const createCommonConfigurationFile = (configurationAnswers) => {
  const commonConfiguration = getWebpackCommonConfiguration(configurationAnswers)
  const normalizedLoaders = inspect(commonConfiguration)

  const loadersFileStream = fs.createWriteStream(
    './webpack/configuration/common.js',
  );

  loadersFileStream.write(Buffer.from(`const commonConfiguration = ${normalizedLoaders};`))
  loadersFileStream.write("\n\nmodule.exports = commonConfiguration;")

  loadersFileStream.end()
}



const createWebpackConfigurationFile = (configurationAnswers) => {
  console.warn({configurationAnswers})
  createCommonConfigurationFile(configurationAnswers)
  createDevelopmentConfigurationFile(configurationAnswers)
  // createProductionConfigurationFile(configurationAnswers)
}


module.exports = createWebpackConfigurationFile
