const path = require('path')
const inquirer = require('inquirer')

const askAboutConfigFolder = cwdPath => {
  const cwd = path.basename(cwdPath)
  const question = [
    {
      name: `webpackFolder`,
      type: "list",
      message: `You already have a folder named 'webpack' inside /${cwd}/ folder. Do you want to override it?`,
      choices: ['yes','no'],
      default: ['no'],
    }
  ]

  return inquirer.prompt(question)
}

module.exports = {
  askAboutConfigFolder
}
