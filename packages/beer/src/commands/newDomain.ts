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
import {
  architectures,
  ArchitectureTypes,
  DEFAULT_ARCHITECTURE_SKELETON,
} from "../architecture";
const copy = require("copy-template-dir");

const run = async () => {
  printCommandInitialMessage("Creating your new Domain...");

  const rawDomainName = await questions.askAboutNewDomainName();
  const sanitizedDomainName = rawDomainName.trim().replace(/\s+/gim, "-");

  const selectedArchitecture =
    architectures[config.architecture.type as ArchitectureTypes];

  const vars = {
    domainName: sanitizedDomainName,
    reactElementName: "template",
    componentName: "template",
    interface: "template",
    routes: "template",
  };

  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    config.architecture.type,
    config.architecture.domains_folder_name,
    "{{domainName}}"
  );
  const destinationFolder = path.join(
    process.cwd(),
    config.domains.directories_path,
    sanitizedDomainName
  );

  console.log(
    // config.architecture.type,
    // selectedArchitecture,
    vars.domainName,
    templateFolder,
    destinationFolder
  );

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
