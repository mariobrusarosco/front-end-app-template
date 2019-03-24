const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')

// Utils
const { mkdirCallback } = require('../utils')

// Question(s)
const {
  askAboutBuild,
  askAboutFonts,
  askAboutFontFormats,
} = require('../questions')

const verifyExistingBuild = () => {
  return new Promise(async (resolve, reject) => {
    const cwd = process.cwd()
    const directoryPath = `${cwd}/webpack`

    if (fs.existsSync('webpack'))  {
      const answer = await askAboutBuild(cwd)

      if (answer.existingWebpack === 'no') {
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

const gatherLoadersInfo = () => {
  const loadersInfo = {}

  return new Promise(async (resolve, reject) => {
    const { willUseFonts } = await askAboutFonts()
    const fontFormats = willUseFonts && await askAboutFontFormats()

    console.log(fontFormats)

    resolve()
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
  verifyExistingBuild,
  gatherLoadersInfo,
  askAboutFontFormats,
}
