const fs = require('fs')

const createPackageJSON = (answersMap) => {
  const cwd = process.cwd()

  const packageJSON = `{
    "name": "${answersMap.projectName}",
    "version": "0.0.0",
    "description": "${answersMap.projectName}",
    "private": true,
    "scripts": {
      "dev-front": "webpack-dev-server -r dotenv/config --config ./webpack/build/development.js"
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
      "babel-loader": "^8.2.2",
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
}

module.exports = createPackageJSON
