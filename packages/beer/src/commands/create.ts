import chalk from "chalk";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import {
  printFileCreation,
  printFileCreationProcess,
  printFileCreationResult,
} from "../io";
import config from "../config";
import path from "path";
import { parseElementVariables } from "../reactElements";
import { copyAndParseTemplates } from "../FileSystem";
const copy = require("copy-template-dir");

const run = async () => {
  console.log(chalk.green("Creating your React Element...\n"));

  const { domainName } = await questions.askAboutCurrentDomains();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const architectureReactElements = config.reactElements;
  const selectedElementMetadata = architectureReactElements[reactElementType];

  const templateFolder = path.join(
    __dirname,
    "../",
    "templates",
    config.architecture.type,
    selectedElementMetadata.elementFolder
  );
  const destinationFolder = path.join(
    process.cwd(),
    config.domains.pathToDomainsFolder,
    domainName,
    selectedElementMetadata.elementFolder
  );

  const { elementAbsolutePath, elementTestTitle } = parseElementVariables({
    reactElementName,
    domainName,
    selectedElementMetadata,
  });

  const templateVariables = {
    reactElementName,
    elementAbsolutePath,
    elementTestTitle,
  };

  copyAndParseTemplates({
    templateFolder,
    destinationFolder,
    templateVariables,
    handleFileCreation: (err, createdFiles) => {
      if (err) throw err;

      printFileCreationProcess(createdFiles);
    },
  });
};

const createCommand: CLICommand = {
  command: AvailableCommands.CREATE,
  describe: "Creates a React Element",
  handler: run,
};

export default createCommand;
