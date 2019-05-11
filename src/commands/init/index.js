const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')

// Lib utils
const {
  createExternalPackageJSON,
} = require('../../utils')

// Question Process via Inquirer
const {
  getProjectName,
  verifyPackageJSON,
  gatherLoadersInfo,
} = require('../../core')

const initCommand = yargs.command('init', 'This command start your Front End Build configuration', yargs => {
  // yargs.options({
  //   init: {
  //     demand: true,
  //      description: 'asdasd',
  //      type: 'string'
  //   }
  // })

  (async () => {
    console.log(chalk.green(figlet.textSync("Create Galhofa")))

    let answersMap = {}

    // Project Name
    const projectName = await getProjectName()
    answersMap = { ...answersMap, projectName }

    console.log(answersMap)

    // Checking already existing package.json
    // const existsBuildProcess = await verifyPackageJSON()
    //   console.log(`\n`)

    // Answers to create webpack's loaders
    // const loadersAnswers = await gatherLoadersInfo()
    //   answersMap = { ...answersMap, loadersAnswers }
    //   console.log(`\n`)


    // console.log(answersMap.loadersAnswers)
    // answersMapper = [...answersMapper]
    // console.log(existsBuildProcess)



    // const result = await createWebpackLoaders()

    console.log('waited for folder creation process')

    // console.log(result)
    // Todo createLConfigFiles()
    // Todo createLoaders()

  })()

})

module.exports = initCommand
