import { copyAndMovePocTemplate } from "../FileSystem";
import { printCommandInitialMessage, printFileCreationProcess } from "../io";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import path from "path";
import questions from "../questions";
import { spawn } from "child_process";
import chalk from "chalk";

const installPocProject = (pocName: string) =>
  new Promise((resolve, reject) => {
    const ls = spawn(`cd ${pocName} && yarn`, {
      shell: true,
    });

    ls.stderr.on("error", (data: any) => reject(data));
    ls.on("close", (code: any) => resolve(code));
  });

const runPocProject = (pocName: string) =>
  new Promise((resolve, reject) => {
    const ls = spawn(`cd ${pocName} && yarn start`, {
      shell: true,
      stdio: "inherit",
    });

    // ls.stderr.on("error", (data: any) => reject(data));
    ls.on("close", (code: any) => resolve(code));
  });

const currentWorkingDirectory = process.cwd();

const run = async () => {
  printCommandInitialMessage("NEW POC");

  const pocName = await questions.askAboutPocName();

  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    "poc",
    "vanilla"
  );
  const destinationFolder = path.join(currentWorkingDirectory, pocName);

  copyAndMovePocTemplate({
    templateFolder,
    destinationFolder,
    templateVariables: { pocName },
    handleFileCreation: async (err, createdFiles) => {
      if (err) throw err;

      printFileCreationProcess(createdFiles);

      console.log(
        chalk.yellowBright(
          "\n\n\nGrab a seat. We're installing your POC's dependencies. \n\n\n"
        )
      );

      await installPocProject(pocName);

      const { shouldAutoStart } = await questions.askAboutAutoStart();

      if (shouldAutoStart) {
        await runPocProject(pocName);
      } else {
        console.log(
          chalk.yellowBright(
            `\n\n\nAll set. Go to ${destinationFolder} and run 'yarn start'\n\n\n`
          )
        );
      }
    },
  });
};

const pocCommand: CLICommand = {
  command: AvailableCommands.POC,
  describe: "Initialize a POC",
  handler: run,
};

export default pocCommand;
