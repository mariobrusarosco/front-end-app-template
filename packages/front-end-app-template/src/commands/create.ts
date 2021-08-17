import path from "path"
import core from "../core";
import { AvailableCommands } from "./enums"
import { CLICommand } from "./interfaces"
import { hideBin } from 'yargs/helpers'
const copy = require("copy-template-dir")

const run = async () => {
  console.log("creating your React component")
  const typedCommands =  hideBin(process.argv)


  // Project Name
  const projectName = await core.getProjectName();
  console.log("Creating template", projectName);

    const inDir = path.resolve(__dirname, "../templates/react/function-component");
    const outDir = path.join(process.cwd(), "src", "components");

    const vars = { componentName: projectName };

    copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
      if (err) throw err;
      createdFiles.forEach((filePath) => console.log(`Created ${filePath}`));
      console.log("done!");
    });
}

const createCommand: CLICommand = {
  command: AvailableCommands.CREATE,
  describe: "Creates a react component",
  handler: run
}

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
