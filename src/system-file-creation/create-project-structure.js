const fse = require('fs-extra');
const path = require('path')

const { askAboutFrameworks } = require('../questions');

// TODO move to an enum, think about a better name
const scriptApproaches = {
  'React': {
    SOURCE_FOLDER_PATH : path.resolve(__dirname, '..', 'folders-structures', 'react'),
  },
  'Vanilla': {
    SOURCE_FOLDER_PATH : path.resolve(__dirname, '..', 'folders-structures', 'vanilla'),
  },
  'default': {
    SOURCE_FOLDER_PATH : path.resolve(__dirname, '..', 'folders-structures', 'react'),
  },
}


// TODO does it make sense to deal with async here...
async function copyFilesAsync () {
  try {
    await fse.copy(SOURCE_FOLDER_PATH, DESTINATION_FOLDER_PATH)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

const createProjectStructure = () => new Promise(async resolve => {
  const { framework  } = await askAboutFrameworks()
  const { SOURCE_FOLDER_PATH } = scriptApproaches[framework] || scriptApproaches['default']
  const DESTINATION_FOLDER_PATH = './src';

  fse.copySync(SOURCE_FOLDER_PATH,DESTINATION_FOLDER_PATH)
  fse.copySync(path.resolve(__dirname, '..', 'typescript', 'tsconfig.json'), './tsconfig.json', { overwrite: true})
  fse.copySync(path.resolve(__dirname, '..', 'babel', '.babelrc'), './.babelrc', { overwrite: true})

  resolve()
})



module.exports = createProjectStructure
