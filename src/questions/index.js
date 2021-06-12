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
      choices: ['ttf','woff','woff2','oet','otf', 'all'],
      // default: ['all']
    }
  ]

  return inquirer.prompt(fontFormats)
}

module.exports = {
  askAboutProjectName,
  askAboutFonts,
  askAboutFontFormats,
  // askAboutLoaders,
}
