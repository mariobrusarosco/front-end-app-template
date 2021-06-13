// Loaders
const setWebpackLoaderForFonts = (fontFormats) => {
  const givenFontsFormats = fontFormats
  const parsedFontsFormats = givenFontsFormats.join('|')

  return `{
    test: /\\.(${parsedFontsFormats})$/,
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

const setWebpackLoaderForStyle = (scriptFormats) => {
  return `{
    test: /\.css$/,
    include: path.resolve('src'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
      },
    ]
  }
`
}


// Require Statements
const requireStatements = [
  `const path = require('path')`,
]

const getWebpackCommonLoaders = loadersAnswers => {
  const loaderForFonts = setWebpackLoaderForFonts(loadersAnswers.fontFormats)
  const loaderForScript = setWebpackLoaderForScripts(loadersAnswers.fontFormats)
  const loaderForStyles = setWebpackLoaderForStyle(loadersAnswers.fontFormats)

  return {
    requireStatements,
    loaders: [
      loaderForFonts,
      loaderForScript,
      loaderForStyles
    ]
  }
}


module.exports = getWebpackCommonLoaders
