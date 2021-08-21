import path from "path";
import { ReactElementMetadata } from "../architecture";
import config from "../config";
import {
  reactElementMetadata,
  ReactElementTypes,
} from "../react-elements/enums";

import { capitalize } from "lodash";

export const parseElementVariables = ({
  reactElementName,
  // domainsFolderName,
  domainName,
  selectedElementMetadata,
}: {
  reactElementName: string;
  // domainsFolderName: string;
  domainName: string;
  selectedElementMetadata: any;
}) => {
  // Domains | Messaging | UI | Components | MessagingDrawer
  // const test = ["domains", ...elementFolder.split("/")];

  const a = selectedElementMetadata.elementTestTitle
    .replace(":domainName", capitalize(domainName))
    .replace(":reactElementName", reactElementName);
  const b = selectedElementMetadata.elementAbsolutePath
    .replace(":domainName", domainName)
    .replace(":reactElementName", reactElementName);

  return {
    elementTestTitle: a,
    elementAbsolutePath: b,
  };
};

export const buildelementTestTitle = ({
  reactElementName,
  domainsFolderName,
  domainName,
  elementFolder,
}: {
  reactElementName: string;
  domainsFolderName: string;
  domainName: string;
  elementFolder: string;
}) => {
  return "Domains | Messaging | UI | Components | MessagingDrawer";
};
// export const generateElementMetadata = ({
//   domainName,
//   reactElementType,
//   reactElementName,
// }: {
//   domainName: string;
//   reactElementType: ReactElementTypes;
//   reactElementName: string;
// }) => {
//   const selectedMetadata = elementsMetadata[reactElementType];
//   const destinationFolder = path.join(
//     process.cwd(),
//     config.domains.pathToDomainsFolder,
//     domainName,
//     selectedMetadata.elementFolder
//   );
//   const templateFolder = path.join(
//     __dirname,
//     "..",
//     "templates",
//     "react",
//     selectedMetadata.templateFolder
//   );

//   return { destinationFolder, templateFolder, reactElementName };
// };
