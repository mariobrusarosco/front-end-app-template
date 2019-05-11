const path = require('path')
const inquirer = require('inquirer')

const askAboutProjectName = () => {
  const question = [
    {
      name: 'projectName',
      type: 'input',
      message: 'Type your projects name'
    }
  ]
  return inquirer.prompt(question)
}

const askAboutPackageJSON = cwdPath => {
  const { dir } = path.parse(cwdPath)

  const question = [
    {
      name: `existingPackageJSON`,
      type: "list",
      message: `You already have a file named 'package.json' inside '${dir}' folder. Do you want to override it?`,
      choices: ['yes','no'],
      default: ['no'],
    }
  ]

  return inquirer.prompt(question)
}

const askAboutFonts = () => {
  const question = [
    {
      name: 'willUseFonts',
      type: 'confirm',
      message: `Are you going to use fonts hosted in your project (via '@font-face' rule?`,
      default: 'no'
    }
  ]

  return inquirer.prompt(question)
}

const askAboutFontFormats = () => {
  const fontFormats = [
    {
      name: 'fontTypes',
      type: 'checkbox',
      message: `Choose some font formats:`,
      choices: ['ttf','woff','woff2','oet','otf','all'],
      default: ['all']
    }
  ]

  return inquirer.prompt(fontFormats)
}

module.exports = {
  askAboutProjectName,
  askAboutPackageJSON,
  askAboutFonts,
  askAboutFontFormats,
  // askAboutLoaders,
}
