const yargs = require('yargs')
const figlet = require('figlet');
const chalk = require('chalk')
const { execSync } = require('child_process')

// Lib utils

const startCommand = yargs.command('start', 'This command start your Development Live Server', yargs => {

  (async () => {
    console.log(chalk.green(chalk.bold("Starting Developmennt Environment")))

    execSync('yarn dev-front')

    // process.exit(0)
  })()

})

module.exports = startCommand
