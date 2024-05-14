import path from "path";
import { spawn } from "child_process";
import chalk from "chalk";
import {
  printCommandInitialMessage,
  printFileCreationProcess,
} from "../../domains/io";
import questions from "../../domains/questions";
import { copyAndMovePocTemplate } from "../../domains/FileSystem";
var appRoot = require("app-root-path");

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

const createPocCommand = async () => {
  printCommandInitialMessage("NEW POC");

  const { pocName } = await questions.askAboutPocName();
  const { pocType } = await questions.askAboutPocType();

  const templateFolder = path.join(
    __dirname,
    "..",
    "..",
    "templates",
    "poc",
    pocType
  );
  const destinationFolder = path.join(currentWorkingDirectory, pocName);

  console.log({
    pocName,
    pocType,
    templateFolder,
    destinationFolder,
  });

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

export default createPocCommand;
