const fs = require('fs')

const createWebpackBuildFile = () => {
  const loadersFileStream = fs.createWriteStream(
    './webpack/build/development.js',
  );

  loadersFileStream.write("const commonConfig = require('../configuration/common');\n")
  loadersFileStream.write("const developmentConfig = require('../configuration/development');\n")
  loadersFileStream.write("const configurationData = { ...commonConfig, ...developmentConfig };\n\n")

  loadersFileStream.write("const commonLoaders = require('../loaders/common');\n")
  // loadersFileStream.write("const developmentLoaders = require('../loaders/development');\n")
  loadersFileStream.write("const loadersData = { module: { rules: [ ...commonLoaders ]}};\n\n")

  loadersFileStream.write("const commonPlugins = require('../plugins/common');\n")
  loadersFileStream.write("const pluginsData = { plugins: [ ...commonPlugins ]};\n\n")

  loadersFileStream.write("\nconst developmentBuild = () => ({\n")
  loadersFileStream.write('\t...configurationData,')
  loadersFileStream.write('\n\t...loadersData,')
  loadersFileStream.write('\n\t...pluginsData,')
  loadersFileStream.write('\t\n})')
  loadersFileStream.write("\n\nmodule.exports = developmentBuild()")

  loadersFileStream.end()
}


module.exports = createWebpackBuildFile
