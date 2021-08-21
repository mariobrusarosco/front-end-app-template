import chalk from "chalk";
import core from "../core";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import { printFileCreation, printFileCreationResult } from "../io";
import { architectures, ArchitectureTypes } from "../architecture";
import config from "../config";
import path from "path";
const copy = require("copy-template-dir");

const run = async () => {
  console.log(chalk.green("Creating your React Element...\n"));

  const { domainName } = await questions.askAboutCurrentDomains();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const selectedArchitecture = architectures[config.architecture.type];

  const elementMetadata = selectedArchitecture[reactElementType];

  // const { destinationFolder, templateFolder } =
  //   await core.getReactElementMetadata({
  //     domainName,
  //     reactElementType,
  //     reactElementName,
  //   });

  const templateFolder = path.join(
    __dirname,
    "..",
    elementMetadata.templateFolder
  );
  const destinationFolder = path.join(
    process.cwd(),
    config.domains.directories_path,
    domainName,
    elementMetadata.destinationFolder
  );

  const vars = {
    reactElementName,
    domainsFolderName: config.architecture.domains_folder_name,
    domainName,
    elementFolder: elementMetadata.elementFolder,
  };

  console.log({
    // selectedArchitecture,
    templateFolder,
    destinationFolder,
    vars,
  });

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
