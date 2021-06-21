const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')
const fs = require('fs')
const util = require('util')
const path = require('path')

// Lib utils
const {
  createExternalPackageJSON,
} = require('../../utils')

// Question Process via Inquirer
const {
  verifyEmptyProject,
  getProjectName,
  gatherLoadersInfo,
  createStructure,
  clearCurrentProjectDir,
  getProjectConfiguration
} = require('../../core')

const initCommand = yargs.command('init', 'This command start your Front End Build configuration', yargs => {


  (async () => {
    console.log(chalk.green(figlet.textSync("Create Galhofa")))

    let answersMap = {}

    const isProjectEmpty = await verifyEmptyProject()
    isProjectEmpty && await clearCurrentProjectDir()

    // Project Name
    const projectName = await getProjectName()
    answersMap = { ...answersMap, projectName }


    const configurationAnswers = await getProjectConfiguration()
    answersMap = {
      ...answersMap,
      configurationAnswers
    }

    // console.log('checking package.json', answersMap)
    // Checking already existing package.json
    // const existsBuildProcess = await verifyPackageJSON()

    // Answers to create webpack's loaders
    const loadersAnswers = await gatherLoadersInfo()
      answersMap = { ...answersMap, loadersAnswers }
      // console.log('----loadersAnswers: ',loadersAnswers)

      await createStructure(answersMap)

    console.log(chalk.green("Done!"))
  })()

})

module.exports = initCommand
