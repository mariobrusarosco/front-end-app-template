const fs = require('fs')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const path = require('path')

// Utils
const {
  mkdirCallback,
} = require('../utils')

// Question(s)
const {
  askAboutProjectName,
  askAboutPackageJSON,
  askAboutFonts,
  askAboutFontFormats,
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

const verifyPackageJSON = (answersMap) => {

  return new Promise(async (resolve, reject) => {
    const projectName = answersMap.projectName

    if (!projectName) {
      throw new Error('You must provide a name for your project to continue the process')
      process.exit(-1)
    }

    // const cwd = process.cwd()
    // const directoryPath = `${cwd}/${projectName}-webpack`

    if (fs.existsSync('package.json'))  {
      const { existingWebpack } = await askAboutPackageJSON(directoryPath)

      if (existingWebpack === 'no') {
        console.log('Bye')
        process.exit(-1)
      }

      // Removing the old directory
      rimraf.sync(directoryPath)
    }

    fs.mkdir(directoryPath, { recursive: true }, error => {
      if(error) {
        console.log('It was not possible to create a configuration folder: ', error)
        process.exit(-1)
      }

      console.log(`Created a configuration folder at: ${directoryPath}`)

      resolve()
    })
  })
}

// const setFolders = () => {
//   const commonLoaders = config => {
//     return `
//       const path = require('path')

//       const commonLoaders = {
//         test: /\.js$/,
//         include: path.resolve('src'),
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       }

//       module.exports = commonLoaders
//     `
//   }

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

//     const packageJSON = `{
//       "name": "webpack-boilerplate",
//       "version": "4.4.6",
//       "description": "Webpack Boilerplate",
//       "private": true,
//       "scripts": {
//         "dev-front": "webpack-dev-server -r dotenv/config --config ./webpack/configuration/development/index.js"
//       },
//       "devDependencies": {
//         "@babel/core": "^7.2.2",
//         "@babel/plugin-proposal-class-properties": "^7.3.3",
//         "@babel/plugin-proposal-optional-chaining": "^7.2.0",
//         "@babel/plugin-syntax-dynamic-import": "^7.2.0",
//         "@babel/plugin-transform-async-to-generator": "^7.2.0",
//         "@babel/plugin-transform-runtime": "^7.2.0",
//         "@babel/polyfill": "^7.2.5",
//         "@babel/preset-env": "^7.2.3",
//         "@babel/preset-react": "^7.0.0",
//         "clean-webpack-plugin": "^1.0.0",
//         "compression-webpack-plugin": "^2.0.0",
//         "css-loader": "^1.0.1",
//         "dotenv": "^6.2.0",
//         "html-webpack-plugin": "^3.2.0",
//         "webpack": "^4.26.0",
//         "webpack-cli": "^3.1.2",
//         "webpack-dev-server": "^3.1.10"
//       }
//     }`

//   const start = async function() {
//     rimraf.sync('./webpack')

//     fs.mkdirSync('./webpack/')
//     fs.mkdirSync('./webpack/loaders/')
//     fs.mkdirSync('./webpack/loaders/common')
//     fs.mkdirSync('./webpack/loaders/development')
//     fs.mkdirSync('./webpack/loaders/production')
//     fs.mkdirSync('./webpack/configuration/')
//     fs.mkdirSync('./webpack/configuration/common')
//     fs.mkdirSync('./webpack/configuration/development')
//     fs.mkdirSync('./webpack/configuration/production')
//     fs.mkdirSync('./webpack/plugins/')
//     fs.mkdirSync('./webpack/plugins/common')
//     fs.mkdirSync('./webpack/plugins/development')
//     fs.mkdirSync('./webpack/plugins/production')

//     fs.writeFileSync('./package.json', packageJSON, 'utf-8')
//     fs.writeFileSync('./webpack/configuration/common/index.js', commonConfig, 'utf-8')
//     fs.writeFileSync('./webpack/loaders/common/index.js', commonLoaders(), 'utf-8')
//     fs.writeFileSync('./webpack/plugins/common/index.js', commonPlugins(), 'utf-8')

//     fs.writeFileSync('./webpack/configuration/development/index.js', developmentConfig('/'), 'utf-8')
//   }
// }

const gatherLoadersInfo = () => {
  const loadersInfo = {}

  return new Promise(async (resolve, reject) => {
    const { willUseFonts } = await askAboutFonts()

    const fontFormats = willUseFonts && await askAboutFontFormats()

    resolve(fontFormats)
    // resolve(answer)

    // fs.mkdir(`${cwd}/webpack/loaders/common/index.js`, (error) => {
    //   if (error) {
    //     console.log(`Could not create this file. Reason: ${error}`)
    //     reject()
    //   }
    //   else {
    //     resolve(true)
    //   }
    // })
  })
}


module.exports = {
  getProjectName,
  verifyPackageJSON,
  gatherLoadersInfo,
  askAboutFontFormats,
}
