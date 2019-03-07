const fs = require('fs')
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

    if (fs.existsSync('webpack'))  {
      const answer = await askAboutBuild(cwd)

      if (answer.existingWebpack === 'no') {
        console.log('Bye')
        process.exit(1)
      }
    }

    resolve()
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
