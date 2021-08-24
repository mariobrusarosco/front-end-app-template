import path from "path";
import { copyAndParseTemplates } from "../../FileSystem";
import { printCommandInitialMessage, printFileCreationProcess } from "../../io";
import questions from "../../questions";
import { parseTargetVariables } from "../../reactElements";

const createElementCommand = async (args: any) => {
  printCommandInitialMessage(`NEW ${args.target}`);

  // const { reactElementType } =
  //   !args.path && (await questions.askAboutReactElementName());
  const { reactElementType } =
    !args.path && (await questions.askAboutReactElementName());

  const { element, templateFolder, destinationFolder, elementPath } =
    parseTargetVariables({
      path: args.path,
      target: args.target,
    });

  const templateVariables = {
    reactElementName: element,
    elementAbsolutePath: args.path,
    elementPath,
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
