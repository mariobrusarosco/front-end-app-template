// Loaders
const setWebpackLoaderForFonts = ({ fontFormats }) => {
  if(!fontFormats || !fontFormats.length) return null

  const regexForFontFormats = fontFormats.join('|')

  return `{
    test: /\\.(${regexForFontFormats})$/,
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
  const loaderForFonts = setWebpackLoaderForFonts(loadersAnswers.fontFormatsAnswers)
  const loaderForScript = setWebpackLoaderForScripts(loadersAnswers)
  const loaderForStyles = setWebpackLoaderForStyle(loadersAnswers)

  const allPosibleLoadersConfigs = [
    loaderForFonts,
    loaderForScript,
    loaderForStyles
  ]

  const allConfiguredLoaders = allPosibleLoadersConfigs.filter(loadersConfig => !!loadersConfig)

  return {
    requireStatements,
    loaders: allConfiguredLoaders
  }
}


module.exports = getWebpackCommonLoaders
