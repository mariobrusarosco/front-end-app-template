import path from "path";
import config from "../config";
import { reactElementMetadata, ReactElementTypes } from "./enums";

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
    config.domains.directories_path,
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
