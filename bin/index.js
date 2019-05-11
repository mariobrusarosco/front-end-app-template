#!/usr/bin/env node



// Commands
const initCommand = require('../src/commands/init')
// Yargs
const yargs = require('yargs')
.command(initCommand)

// Question Process via Inquirer
const {
  getProjectName,
  verifyExistingBuild,
  gatherLoadersInfo,
} = require('../src/core')


const typedCommands = yargs.argv._

if (!typedCommands.length) {
  return console.log(`Please type 'create galhofa --help' to see the available commands`)
}

  // // Project Name
  // const { projectName } = await getProjectName()
  // global.answersMap = { ...global.answersMap, projectName }

  // // Checking already existing directories
  // const existsBuildProcess = await verifyExistingBuild()
  // console.log(`\n`)

  // // Answers to create webpack's loaders
  // const loadersAnswers = await gatherLoadersInfo()
  // global.answersMap = { ...global.answersMap, loadersAnswers }
  // console.log(`\n`)

  // console.log('loaderes asnwer', global.answersMap.loadersAnswers)
  // // answersMapper = [...answersMapper]
  // // console.log(existsBuildProcess)



  // // const result = await createWebpackLoaders()

  // console.log('waited for folder creation process')

  // console.log(result)
  // Todo createLConfigFiles()
  // Todo createLoaders()
// }

module.exports = yargs.argv
