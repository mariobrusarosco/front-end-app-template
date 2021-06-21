const inquirer = require('inquirer')

// TODO move all questions to separated files
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


// TODO think about a better name
const askAboutFrameworks = () => {
  const framework = [
    {
      name: 'framework',
      type: 'checkbox',
      message: `Choose your framework`,
      choices: ['React','Angular (But is gonna be React)','Vue (OK, let go with React)', 'Svelte (React it is!)','Vanilla'],
      default: 'React'
    }
  ]

  return inquirer.prompt(framework)
}

// TODO think about a better name
const askAboutScripts = () => {
  const typeOfScript = [
    {
      name: 'scripts',
      type: 'checkbox',
      message: `Select the file extension for you main script?`,
      choices: ['js','tsx', 'ts']
    }
  ]

  return inquirer.prompt(typeOfScript)
}

const askAboutClearingCurrentDir = () => {
  const question = [
    {
      name: 'clearCurrentDir',
      type: 'confirm',
      message: 'Do you want to clear your folder? You will not be able to undo this...',
      default: 'no'
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
      name: 'fontFormats',
      type: 'checkbox',
      message: `Choose some font formats:`,
      choices: ['ttf','woff','woff2','oet','otf'],
    }
  ]

  return inquirer.prompt(fontFormats)
}

module.exports = {
  askAboutProjectName,
  askAboutFonts,
  askAboutFontFormats,
  // askAboutLoaders,
  askAboutScripts,
  askAboutFrameworks,
  askAboutClearingCurrentDir
}
