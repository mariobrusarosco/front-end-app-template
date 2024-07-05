import { copyAndParseTemplates } from "../../file-system/copy";
import { askAboutElementName } from "../../io/input/react/ask-about-element-name";
import { askAboutElementType } from "../../io/input/react/ask-about-element-type";
import { askAboutDomainName } from "../../io/input/tool-config/current-domains";
import { outputFileCreationProcess } from "../../io/output";
import { getAvailableReactElements } from "../../tool-config/helpers";
import { generateFolderPaths } from "./generate-folder-paths";

const action = async () => {
  const { domain: inputedDomain } = await askAboutDomainName();
  const { type: inputedElementType } = await askAboutElementType();
  const { name: inputedElementName } = await askAboutElementName(
    inputedElementType
  );

  const { templateFolder, destinationFolder } = generateFolderPaths({
    inputedElementType,
    inputedDomain,
  });

  const templateVariables = {
    name: inputedElementName,
  };

  copyAndParseTemplates({
    templateFolder,
    destinationFolder,
    templateVariables,
    handleFileCreation: (err, createdFiles) => {
      if (err) throw err;

      outputFileCreationProcess(createdFiles);
    },
  });
};

export const GENERATE_COMMAND = () => ({
  name: "generate",
  description: `Generates a React: ${getAvailableReactElements()}`,
  aliases: ["garcom", "chefe", "fera", "mestre", "campeao"],
  action,
});
