// import { generateContextMetadata } from "./context";
import path from "path";
import config from "../config";
import { reactElementMetadata, ReactElementTypes } from "./enums";
// import { generateFunctionComponentMetadata } from "./functionComponent";
// import { generateHookMetadata } from "./hook";

// const structures: reactElementMetadata = {
//   [ReactElementTypes.FUNCTION_COMPONENT]: generateFunctionComponentMetadata,
//   [ReactElementTypes.CONTEXT]: generateContextMetadata,
//   [ReactElementTypes.HOOK]: generateHookMetadata,
// };

export const elementsMetadata: reactElementMetadata = {
  [ReactElementTypes.FUNCTION_COMPONENT]: {
    elementFolder: "components",
    templateFolder: ReactElementTypes.FUNCTION_COMPONENT,
    reactElementName: ReactElementTypes.FUNCTION_COMPONENT,
  },
  [ReactElementTypes.CONTEXT]: {
    elementFolder: "context",
    templateFolder: ReactElementTypes.CONTEXT,
    reactElementName: ReactElementTypes.CONTEXT,
  },
  [ReactElementTypes.HOOK]: {
    elementFolder: "hooks",
    templateFolder: ReactElementTypes.HOOK,
    reactElementName: ReactElementTypes.HOOK,
  },
};

export const generateElementMetadata = ({
  domainName,
  reactElementType,
  reactElementName,
}: {
  domainName: string;
  reactElementType: ReactElementTypes;
  reactElementName: string;
}) => {
  const selectedMetadata = elementsMetadata[reactElementType];
  const destinationFolder = path.join(
    process.cwd(),
    config.domainsPath,
    domainName,
    selectedMetadata.elementFolder
  );
  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    "react",
    selectedMetadata.templateFolder
  );

  return { destinationFolder, templateFolder, reactElementName };
};
