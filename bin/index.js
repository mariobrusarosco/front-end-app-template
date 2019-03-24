#!/usr/bin/env node
const path = require('path')
const figlet = require('figlet');
const chalk = require('chalk')
const fs = require('fs')

// Inquirer
const {
  verifyExistingBuild,
  gatherLoadersInfo,
} = require('../src/core')


const run = async () => {

  console.log(chalk.green(figlet.textSync("Create Galhofa")))

  let answersMapper = []

  const existsBuildProcess = await verifyExistingBuild()
  console.log(`\n`)
  // const loadersAnswers = await gatherLoadersInfo()
  // console.log(`\n`)

  // console.log('loaderes asnwer', loadersAnswers)
  // answersMapper = [...answersMapper]
  // console.log(existsBuildProcess)



  // const result = await createWebpackLoaders()

  console.log('waited for folder creation process')

  // console.log(result)
  // Todo createLConfigFiles()
  // Todo createLoaders()
}

module.exports = run()
