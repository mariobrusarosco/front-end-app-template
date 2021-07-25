// const fs = require("fs");
// const path = require("path");
// const project = path.join(__dirname, "../tsconfig.json");
// const dev = fs.existsSync(project);
// const yargs = require("yargs");

// TODO Refactor this
// require("ts-node").register({ project });

// Commands
// const initCommand = require("../src/commands/init");
// const createCommand = require("../src/commands");

// yargs.command(createCommand).command(initCommand);

// const typedCommands = yargs.argv._;

// if (!typedCommands.length) {
//   console.log(
//     `Please type 'app-template --help' to see the available commands`
//   );
// }

import yargs from "yargs";

console.log({yargs});
