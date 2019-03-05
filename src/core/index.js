const fs = require('fs')
const path = require('path')

// Question(s)
const { askAboutConfigFolder } = require('../questions')

const createConfigFolder = async () => {
  const currentCwd = process.cwd()

  if (fs.existsSync('webpack')) {
    const answer = await askAboutConfigFolder(currentCwd)

    if (answer.webpackFolder === 'no') {
      console.log('Bye!')
      process.exit()
    }
  }


  fs.mkdir(`${currentCwd}/webpack`, { recursive: true },e => {
    if (e) {
      console.log('It was not possible to create a configuration folder: ', e)
      process.exit()
    }

    console.log(`Created a configuration folder at: ${currentCwd}/webpack`)
  })
}

module.exports = {
  createConfigFolder
}
