import path from "path";
import config from "../../domains/config";
import { copyAndParseTemplates } from "../../domains/FileSystem";
import {
  printCommandInitialMessage,
  printFileCreationProcess,
} from "../../domains/io";
import questions from "../../domains/questions";

const { architecture, domains } = config;
const architectureType = architecture.type;
const currentWorkingDirectory = process.cwd();

const createDomainCommand = async () => {
  printCommandInitialMessage("NEW DOMAIN");

  const domainName = await questions.askAboutNewDomainName();

  const templateFolder = path.join(
    __dirname,
    "..",
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
    // TODO Abstract!
    handleFileCreation: (err, createdFiles) => {
      if (err) throw err;

      printFileCreationProcess(createdFiles);
    },
  });
};

export default createDomainCommand;
