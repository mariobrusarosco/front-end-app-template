import chalk from "chalk";
import core from "../core";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import { printFileCreation, printFileCreationResult } from "../io";
const copy = require("copy-template-dir");

const run = async () => {
  console.log(chalk.green("Creating your React Element...\n"));

  const { domainName } = await questions.askAboutCurrentDomains();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const { destinationFolder, templateFolder } =
    await core.getReactElementMetadata({
      domainName,
      reactElementType,
      reactElementName,
    });

  const vars = { reactElementName, domainName };

  copy(
    templateFolder,
    destinationFolder,
    vars,
    (err: Error, createdFiles: string[]) => {
      if (err) throw err;

      createdFiles.forEach((filePath) => printFileCreation(filePath));

      printFileCreationResult(createdFiles.length);
    }
  );
};

const createCommand: CLICommand = {
  command: AvailableCommands.CREATE,
  describe: "Creates a React Element",
  handler: run,
};

export default createCommand;
