const fs = require('fs-extra')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const path = require('path')
const chalk = require('chalk')

// TODO export those requires via index
const createWebpackLoadersFile = require('../system-file-creation/create-webpack-loaders-file')
const createWebpackConfigurationFile = require('../system-file-creation/create-webpack-configuration-file')
const createWebpackPluginsFiles = require('../system-file-creation/create-webpack-plugins-file')
const createWebpackBuildFile = require('../system-file-creation/create-webpack-build-file')
const createPackageJSON = require('../system-file-creation/create-package-json')
const createProjectStructure = require('../system-file-creation/create-project-structure')

// Utils
const {
  createCommonLoaders,
  mkdirCallback,
  installDependencies
} = require('../utils')

// Question(s)
const {
  askAboutProjectName,
  askAboutFonts,
  askAboutFontFormats,
  askAboutClearingCurrentDir,
  askAboutScripts
} = require('../questions')

const getProjectName = () => {
  return new Promise(async (resolve, reject) => {
    const { projectName } = await askAboutProjectName()

    if(!projectName) {
      console.log(`You must provide a name for your project to continue the process`)
      process.exit(-1)
    }
    resolve(projectName)
  })
}

const clearCurrentProjectDir = () => new Promise(async (resolve) => {
  const { clearCurrentDir } = await askAboutClearingCurrentDir()

  if(clearCurrentDir) {
    const cwd = process.cwd()

    fs.emptyDir(cwd, err => {
      if (err) return console.error(err)
    })
    return resolve()
  }

  process.exit(-1)
})

const verifyEmptyProject = () => new Promise(async (resolve) => {
  const cwd = process.cwd()
  const cwdContent = fs.readdirSync(cwd)

  if (cwdContent.length) {
    console.log(chalk.red('Your Project Folder (root folder) must be empty. Help me here, please!'))

    resolve(true)
  }

  resolve(false)
})

const createStructure = async answersMap => {
  // console.log('----createStructure / answersMap: ',answersMap)
  console.log(chalk.green('Creating template structure...'))

  rimraf.sync('./webpack')

  fs.mkdirSync('./webpack/')
  fs.mkdirSync('./webpack/loaders/')
  fs.mkdirSync('./webpack/plugins/')
  fs.mkdirSync('./webpack/configuration/')
  fs.mkdirSync('./webpack/build/')


  createPackageJSON(answersMap)
  createWebpackLoadersFile(answersMap.loadersAnswers)
  createWebpackConfigurationFile(answersMap.configurationAnswers)
  createWebpackPluginsFiles(answersMap.pluginsAnswers)

  createWebpackBuildFile()

  await createProjectStructure()

  installDependencies()
}

    // fs.writeFileSync('./webpack/configuration/development/index.js', developmentConfig('/'), 'utf-8')

  //   fs.mkdir(directoryPath, { recursive: true }, error => {
  //     if(error) {
  //       console.log('It was not possible to create a configuration folder: ', error)
  //       process.exit(-1)
  //     }

  //     console.log(`Created a configuration folder at: ${directoryPath}`)

  //     resolve()
  //   })
  // })


//   const srcPath = pathArray => {
//     return pathArray.map(dir => '${dir}')
//   }

//   const commonPlugins = plugins => {
//     return `
//       const webpack = require('webpack')
//       const path = require('path')

//       const commonPlugins = [
//         new CleanWebpack(['dist'], {
//           root: process.cwd()
//         }),
//         new HtmlWebpack({
//           template: path.resolve(${srcPath(['src', 'index.html'])})
//         }),
//       ]

//       module.exports = commonPlugins
//     `
//   }


//   const entryPoints = (entries) => {
//     return `[
//       '@babel/polyfill',
//       ${entries.map(entry => './${entry}')},
//     ]`
//   }

//   const modulesToResolve = modules => {
//     return `[
//       path.resolve('node_modules'),
//       ${modules.map(module => path.resolve('${module}'))}
//     ]`
//   }

//   const commonConfig = `
//     const path = require('path')

//     const commonConfig = env => ({
//       entry: ${entryPoints(['src/index.js'])},
//       resolve : {
//         modules: ${modulesToResolve(['src','server'])}
//       }
//     })

//     module.exports = commonConfig
//   `

//   const developmentConfig = (publicPath) => {
//     return `
//         const path = require('path')

//         // Webpacks's Configurations
//         const commonConfig = require('../common')

//         const developmentConfig = env => ({
//           mode: 'development',
//           devtool: 'eval-source-map',
//           output: {
//             filename: '[name].development.bundle.js',
//             path: path.resolve(__dirname, '../dist'),
//             publicPath: '${publicPath}'
//           },
//           devServer: {
//             contentBase: 'dist',
//             hot: true
//           },
//         })

//         module.exports = { ...commonConfig() , ...developmentConfig()}
//       `
//     }



const getProjectConfiguration = () => new Promise(async (resolve) => {
  const scriptsAnswers = await askAboutScripts()
  console.log({ scriptsAnswers })

  const allAnswersAboutConfiguration = {
    scriptsAnswers,
  }
  resolve({...allAnswersAboutConfiguration })
})


const gatherLoadersInfo = () => {
  return new Promise(async (resolve, reject) => {
    const { willUseFonts } = await askAboutFonts()

    const fontFormatsAnswers = willUseFonts && await askAboutFontFormats()
    const stylesPreProcessorsAnswers = false

    const allAnswersAboutWebpackLoaders = {
      fontFormatsAnswers,
      stylesPreProcessorsAnswers
    }

    resolve({...allAnswersAboutWebpackLoaders})
  })
}

module.exports = {
  getProjectName,
  verifyEmptyProject,
  gatherLoadersInfo,
  askAboutFontFormats,
  createStructure,
  clearCurrentProjectDir,
  getProjectConfiguration
}
