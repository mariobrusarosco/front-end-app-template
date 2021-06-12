const path = require('path')

const setWebpackLoaderForFonts = (fontFormats) => {
  const givenFontsFormats = fontFormats
  const parsedFontsFormats = givenFontsFormats.join('|')

  return {
    test: new RegExp(`\\.(${parsedFontsFormats})$`),
    include: path.resolve('src','assets', 'fonts'),
    use: [
      'file-loader'
    ]
  }
}

const getWebpackCommonLoaders = loadersAnswers => {
  const loaderForFonts = setWebpackLoaderForFonts(loadersAnswers.fontFormats)

  return [
    loaderForFonts
  ]
}


module.exports = getWebpackCommonLoaders
