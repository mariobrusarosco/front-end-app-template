const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')

// Question Process via Inquirer
const {
  getProjectName,
  verifyExistingBuild,
  gatherLoadersInfo,
} = require('../../core')

const initCommand = yargs.command('init', 'This command start your Front End Build configuration', yargs => {
  // yargs.options({
  //   init: {
  //     demand: true
  //   }
  // })

  (async () => {
    console.log(chalk.green(figlet.textSync("Create Galhofa")))
    global.answersMap = {}

      // Project Name
    const { projectName } = await getProjectName()
    global.answersMap = { ...global.answersMap, projectName }

    // Checking already existing directories
    const existsBuildProcess = await verifyExistingBuild()
    console.log(`\n`)

    // Answers to create webpack's loaders
    const loadersAnswers = await gatherLoadersInfo()
    global.answersMap = { ...global.answersMap, loadersAnswers }
    console.log(`\n`)

    console.log('loaderes asnwer', global.answersMap.loadersAnswers)
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
