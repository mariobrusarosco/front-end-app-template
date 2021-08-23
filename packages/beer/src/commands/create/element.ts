import path from "path";
import config from "../../config";
import { copyAndParseTemplates } from "../../FileSystem";
import { printCommandInitialMessage, printFileCreationProcess } from "../../io";
import questions from "../../questions";
import { parseElementVariables } from "../../reactElements";

const architectureReactElements = config.reactElements;

const createElementCommand = async (args: any) => {
  printCommandInitialMessage("NEW ELEMENT");

  const { domainName } = await questions.askAboutCurrentDomains();
  const { reactElementType } = await questions.askAboutReactElementType();
  const { reactElementName } = await questions.askAboutReactElementName();

  const selectedElementMetadata = architectureReactElements[reactElementType];

  const templateFolder = path.join(
    __dirname,
    "..",
    "..",
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

export default createElementCommand;
