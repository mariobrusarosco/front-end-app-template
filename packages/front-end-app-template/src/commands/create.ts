import chalk from "chalk";
import core from "../core";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
const copy = require("copy-template-dir");

const run = async () => {
  console.log(chalk.green("Creating your React Element...\n"));

  const { domainName } = await questions.askAboutDomainName();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const { inDir, outDir } = await core.getReactElement({
    domainName,
    reactElementType,
    reactElementName,
  });

  // console.log({
  //   domainName,
  //   reactElementType,
  //   reactElementName,
  //   reactStructure,
  // });

  const vars = { reactElementName };

  copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
    if (err) throw err;
    createdFiles.forEach((filePath) =>
      console.log(chalk.red(`Created ${filePath}`))
    );
    console.log(chalk.greenBright("\nDone!\n"));
  });
};

const createCommand: CLICommand = {
  command: AvailableCommands.CREATE,
  describe: "Creates a react component",
  handler: run,
};

export default createCommand;

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
