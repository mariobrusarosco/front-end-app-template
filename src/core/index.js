const fs = require('fs')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const path = require('path')
const chalk = require('chalk')
const { inspect } = require('util');

// Utils
const {
  commonLoaders,
  mkdirCallback,
} = require('../utils')

// Question(s)
const {
  askAboutProjectName,
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

const verifyExistingProject = () => {

  return new Promise(async (resolve) => {
    const cwd = process.cwd()
    const cwdContent = fs.readdirSync(cwd)

    if (cwdContent.length) {
      console.log(chalk.red('Your Project Folder (root folder) must be empty. Help me here, please!'))
      process.exit(-1)
    }

    resolve()
  })
}

const createStructure = async answersMap => {
  const cwd = process.cwd()

  const packageJSON = `{
    "name": "${answersMap.projectName}",
    "version": "0.0.0",
    "description": "${answersMap.projectName}",
    "private": true,
    "scripts": {
      "dev-front": "webpack-dev-server -r dotenv/config --config ./webpack/configuration/development/index.js"
    },
    "devDependencies": {
      "@babel/core": "^7.2.2",
      "@babel/plugin-proposal-class-properties": "^7.3.3",
      "@babel/plugin-proposal-optional-chaining": "^7.2.0",
      "@babel/plugin-syntax-dynamic-import": "^7.2.0",
      "@babel/plugin-transform-async-to-generator": "^7.2.0",
      "@babel/plugin-transform-runtime": "^7.2.0",
      "@babel/polyfill": "^7.2.5",
      "@babel/preset-env": "^7.2.3",
      "@babel/preset-react": "^7.0.0",
      "clean-webpack-plugin": "^1.0.0",
      "compression-webpack-plugin": "^2.0.0",
      "css-loader": "^1.0.1",
      "dotenv": "^6.2.0",
      "html-webpack-plugin": "^3.2.0",
      "webpack": "^4.26.0",
      "webpack-cli": "^3.1.2",
      "webpack-dev-server": "^3.1.10"
    }
  }`

  fs.writeFileSync(`${cwd}/package.json`, packageJSON, 'utf-8')
  rimraf.sync('./webpack')

  fs.mkdirSync('./webpack/')
  fs.mkdirSync('./webpack/loaders/')
  fs.mkdirSync('./webpack/plugins/')
  fs.mkdirSync('./webpack/configuration/')

  // const file = fs.createWriteStream(
  //   './webpack/loaders/asdsa.js'
  // );
  // await file.write('1');
  // await file.end()
  // // file.on('end', function() {
  // })
  var readableStream = fs.createReadStream('file1.txt');
  var writableStream = fs.createWriteStream('file2.txt');

  readableStream.setEncoding('utf8');

  readableStream.on('data', function(chunk) {
      writableStream.write(chunk);
  });

  // fs.writeFileSync('./webpack/loaders/common.js', inspect({ name: 1}), 'utf-8')

}
    // fs.mkdirSync('./webpack/loaders/common')
    // fs.mkdirSync('./webpack/loaders/development')
    // fs.mkdirSync('./webpack/loaders/production')
    // fs.mkdirSync('./webpack/configuration/common')
    // fs.mkdirSync('./webpack/configuration/development')
    // fs.mkdirSync('./webpack/configuration/production')
    // fs.mkdirSync('./webpack/plugins/common')
    // fs.mkdirSync('./webpack/plugins/development')
    // fs.mkdirSync('./webpack/plugins/production')

    // fs.writeFileSync('./webpack/configuration/common/index.js', commonConfig, 'utf-8')
    // fs.writeFileSync('./webpack/plugins/common/index.js', commonPlugins(), 'utf-8')

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





const gatherLoadersInfo = () => {
  return new Promise(async (resolve, reject) => {
    const { willUseFonts } = await askAboutFonts()

    const fontFormats = willUseFonts && await askAboutFontFormats()

    const loadersInfo = {
      fontFormats
    }

    resolve(loadersInfo)
  })
}

module.exports = {
  getProjectName,
  verifyExistingProject,
  gatherLoadersInfo,
  askAboutFontFormats,
  createStructure
}
