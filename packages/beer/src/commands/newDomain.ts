import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import config from "../config";
import path from "path";
import { printCommandInitialMessage, printFileCreationProcess } from "../io";
import { copyAndParseTemplates } from "../FileSystem";

const { architecture, domains } = config;
const architectureType = architecture.type;
const currentWorkingDirectory = process.cwd();

const run = async () => {
  printCommandInitialMessage("NEW DOMAIN");

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
    domains.pathToDomainsFolder,
    domainName
  );

  copyAndParseTemplates({
    templateFolder,
    destinationFolder,
    handleFileCreation: (err, createdFiles) => {
      if (err) throw err;

      printFileCreationProcess(createdFiles);
    },
  });
};

const newDomainCommand: CLICommand = {
  command: AvailableCommands.NEW_DOMAIN,
  describe: "Creates a new domain",
  handler: run,
  aliases: ["rodada"],
};

export default newDomainCommand;
