import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import config from "../config";
import path from "path";
import {
  printCommandInitialMessage,
  printFileCreation,
  printFileCreationResult,
} from "../io";
import { architectures } from "../architecture";
import { recursiveCopy } from "../FileSystem/recursive-copy";
import _ from "lodash";
const copy = require("copy-template-dir");

const currentWorkingDirectory = process.cwd();
const { architecture, domains } = config;

const run = async () => {
  printCommandInitialMessage("Creating your new Domain...");

  const architectureType = architecture.type;
  const selectedArchitecture = architectures[architectureType];
  const domainsFolderName = architecture.domains_folder_name;

  const domainName = await questions.askAboutNewDomainName();

  const vars = {
    domainName,
    reactElement: "template",
  };

  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    architectureType,
    domainsFolderName,
    "{{domainName}}"
  );
  const destinationFolder = path.join(
    currentWorkingDirectory,
    domains.directories_path,
    domainName
  );

  // console.log(
  //   // config.architecture.type,
  //   // selectedArchitecture,
  //   vars.domainName,
  //   templateFolder,
  //   destinationFolder
  // );

  // recursiveCopy({
  //   templateFolder,
  //   destinationFolder,
  //   reactElementName: "domainTemplate",
  // });

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
  command: AvailableCommands.NEW_DOMAIN,
  describe: "Creates a new domain",
  handler: run,
};

export default createCommand;
