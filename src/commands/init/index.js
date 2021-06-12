const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')
const fs = require('fs')

// Lib utils
const {
  createExternalPackageJSON,
} = require('../../utils')

// Question Process via Inquirer
const {
  verifyExistingProject,
  getProjectName,
  gatherLoadersInfo,
  createStructure,
} = require('../../core')

const initCommand = yargs.command('init', 'This command start your Front End Build configuration', yargs => {


  (async () => {
    console.log(chalk.green(figlet.textSync("Create Galhofa")))

    var stream = fs.createWriteStream("my_file.txt");
    stream.once('open', function(fd) {
      stream.write("My first row\n");
      stream.write("My second row\n");
      stream.end();
    });
    // const file = await fs.createWriteStream(
    //   './wow.js'
    // );

    // file.write('1');
    // file.end()
    // file.on('end',)


    let answersMap = {}

    // await verifyExistingProject()

    // Project Name
    // const projectName = await getProjectName()
    // answersMap = { ...answersMap, projectName: 'a' }

    // console.log('checking package.json', answersMap)

    // console.log(process.cwd())

    // Checking already existing package.json
    // const existsBuildProcess = await verifyPackageJSON()
      // console.log(`\n`)

    // Answers to create webpack's loaders
    // const loadersAnswers = await gatherLoadersInfo()
    //   answersMap = { ...answersMap, loadersAnswers }
    //   console.log(`\n`)
    //   console.log(answersMap)



    // console.log(answersMap.loadersAnswers)
    // answersMapper = [...answersMapper]
    // console.log(existsBuildProcess)



    // console.log('waiting for folder creation process ...creating...')

    // await createStructure(answersMap)
    // console.log(result)
    // Todo createLConfigFiles()
    // Todo createLoaders()


    process.exit(0)
  })()

})

module.exports = initCommand
