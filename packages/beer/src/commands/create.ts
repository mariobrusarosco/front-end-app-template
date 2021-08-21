import chalk from "chalk";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import { printFileCreation, printFileCreationResult } from "../io";
import { architectures, ArchitectureTypes } from "../architecture";
import config from "../config";
import path from "path";
import { parseElementVariables } from "../reactElements";
import _ from "lodash";
const copy = require("copy-template-dir");

const { architecture, domains } = config;

const architectureType = architecture.type;

const selectedArchitecture = architectures[architectureType];
const domainsFolderName = architecture.domains_folder_name;
const currentWorkingDirectory = process.cwd();
// const pathToDomainsFolder = domains.path_to_domains_folder;

const run = async () => {
  console.log(chalk.green("Creating your React Element...\n"));

  const { domainName } = await questions.askAboutCurrentDomains();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const selectedArchitecture = architectures[config.architecture.type];
  const architectureReactElements = selectedArchitecture.reactElements;

  const selectedElementMetadata = architectureReactElements[reactElementType];

  const domainsFolderName = config.architecture.domains_folder_name;

  // const { destinationFolder, templateFolder } =
  //   await core.getReactElementMetadata({
  //     domainName,
  //     reactElementType,
  //     reactElementName,
  //   });

  const templateFolder = path.join(
    __dirname,
    "../",
    selectedArchitecture.templateFolder,
    selectedElementMetadata.elementFolder
  );
  const destinationFolder = path.join(
    process.cwd(),
    config.domains.path_to_domains_folder,
    domainName,
    selectedElementMetadata.elementFolder
  );

  const { elementAbsolutePath, elementTestTitle } = parseElementVariables({
    reactElementName,
    domainName,
    selectedElementMetadata,
    //   domainsFolderName,
    //   elementMetadata,
  });

  const templateVariables = {
    reactElementName,
    elementAbsolutePath,
    elementTestTitle,
    //   domainsFolderName,
    //   domainName,
    //   elementAbsolutePath,
    //   elementTestTitle,
  };

  console.log({
    selectedElementMetadata,
    destinationFolder,
    templateFolder,
    // templateVariables,
  });

  copy(
    templateFolder,
    destinationFolder,
    templateVariables,
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
