import yargs from "yargs"
import { AvailableCommands } from "./enums"
import { Command } from "./interfaces"

const run = () => {
  console.log("creating your React component")
}

const createCommand: Command = [
  AvailableCommands.CREATE,
  "Creates a react component",
  run
]

export default createCommand

// const path = require("path");
// const copy = require("copy-template-dir");
// const core = require("../core");

// const createCommand = yargs.command(
//   "create",
//   "This command creates context, todo...",
//   (yargs) => {
//     (async () => {
//       const typedCommands = yargs.argv._;
//       console.log("Creating template", typedCommands[1]);

//       // Project Name
//       const projectName = await core.getProjectName();

//       const inDir = path.resolve(__dirname, "../templates/react/context");
//       const outDir = path.join(process.cwd(), "src", "contexts");

//       const vars = { contextName: projectName };

//       copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
//         if (err) throw err;
//         createdFiles.forEach((filePath) => console.log(`Created ${filePath}`));
//         console.log("done!");
//       });
//     })();
//   }
// );

// module.exports = createCommand.argv;
