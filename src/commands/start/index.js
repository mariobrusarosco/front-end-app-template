const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')

// Lib utils

const startCommand = yargs.command('start', 'This command start your Development Live Server', yargs => {

  (async () => {
    console.log()
    console.log(chalk.green(chalk.bold("Starting Developmennt Environment")))
    console.log()

    process.exit(0)
  })()

})

module.exports = startCommand
