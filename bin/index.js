#!/usr/bin/env node
const path = require('path')
const figlet = require('figlet');
const chalk = require('chalk')
const fs = require('fs')

// Inquirer
const {
  createConfigFolder
} = require('../src/core')


module.exports = (async () => {

  console.log(chalk.green(figlet.textSync("Galhofa")))

  createConfigFolder()
  // Todo createLConfigFiles()
  // Todo createLoaders()
})()
