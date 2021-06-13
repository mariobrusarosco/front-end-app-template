const path = require('path')


const getWebpackDevelopmentConfiguration = configurationAnswers => {

  return {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      filename: '[name].development.bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    devServer: {
      contentBase: 'dist',
      hot: true,
      historyApiFallback: true,
    },
    // module: {
    //   rules: [
    //     ...commonLoaders,
    //   ]
    // },
  }
}


module.exports = getWebpackDevelopmentConfiguration
