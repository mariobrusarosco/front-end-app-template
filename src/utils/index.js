const mkdirCallback = function(error, cwd) {
  // debugger
  // return function() {
    if (error) {
      console.log('It was not possible to create a configuration folder: ', error)
      return process.exit()
    }
    process.exit()
}

module.exports = {
  mkdirCallback
}
