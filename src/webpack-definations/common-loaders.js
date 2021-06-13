// Loaders
const setWebpackLoaderForFonts = (fontFormats) => {
  const givenFontsFormats = fontFormats
  const parsedFontsFormats = givenFontsFormats.join('|')

  return `{
    test: new RegExp(/\\.(${parsedFontsFormats})$/),
    include: path.resolve('src','assets', 'fonts'),
    use: [
      'file-loader'
    ]
  }`
}

const setWebpackLoaderForScripts = (scriptFormats) => {
  return `{
    test: /\.js$/,
    include: path.resolve('src'),
    exclude: /node_modules/,
    use: 'babel-loader',
  }`
}


// Require Statements
const requireStatements = [
  `const path = require('path')`,
]

const getWebpackCommonLoaders = loadersAnswers => {
  const loaderForFonts = setWebpackLoaderForFonts(loadersAnswers.fontFormats)
  const loaderFontScript = setWebpackLoaderForScripts(loadersAnswers.fontFormats)

  return {
    requireStatements,
    loaders: [
      loaderForFonts,
      loaderFontScript
    ]
  }
}


module.exports = getWebpackCommonLoaders
