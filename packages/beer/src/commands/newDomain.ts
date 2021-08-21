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
import _ from "lodash";
const copy = require("copy-template-dir");

const { architecture, domains } = config;

const architectureType = architecture.type;
const currentWorkingDirectory = process.cwd();

const run = async () => {
  printCommandInitialMessage("Creating your new Domain...");

  const domainName = await questions.askAboutNewDomainName();

  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    architectureType,
    "tree"
  );
  const destinationFolder = path.join(
    currentWorkingDirectory,
    domains.path_to_domains_folder,
    domainName
  );

  copy(
    templateFolder,
    destinationFolder,
    (err: Error, createdFiles: string[]) => {
      if (err) throw err;

      createdFiles.forEach((filePath) => printFileCreation(filePath));

      printFileCreationResult(createdFiles.length);
    }
  );
};

const newDomainCommand: CLICommand = {
  command: AvailableCommands.NEW_DOMAIN,
  describe: "Creates a new domain",
  handler: run,
};

export default newDomainCommand;
