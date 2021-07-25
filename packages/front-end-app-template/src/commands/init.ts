import yargs from "yargs"
import { AvailableCommands } from "./enums"
import { Command } from "./interfaces"

console.log("starting the init command!!!")

const run = () => {
  console.log("Initializing your project")
}

const initCommand: Command = [
  AvailableCommands.INIT,
  "Initialize your project",
  run
]

export default initCommand

// const yargs = require("yargs");
// const path = require("path");
// const copy = require("copy-template-dir");
// const core = require("../core");

// const initCommand = yargs.command(
//   "init",
//   "This command start your Front End Build configuration",
//   (yargs) => {
//     (async () => {
//       console.log("Creating template");

//       // Project Name
//       const projectName = await core.getProjectName();

//       const inDir = path.resolve(__dirname, "../templates/react");
//       const outDir = path.join(process.cwd(), projectName);

//       const vars = { projectName };

//       copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
//         if (err) throw err;
//         createdFiles.forEach((filePath) => console.log(`Created ${filePath}`));
//         console.log("done!");
//       });
//     })();
//   }
// );

// // console.log("Create Galhofa", initCommand);

// module.exports = initCommand.argv;
