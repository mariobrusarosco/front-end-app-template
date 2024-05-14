import { join } from "path";
import { ReactElementMetadata } from "../architecture";
import config from "../user-config";
import {
  reactElementMetadata,
  ReactElementTypes,
} from "../react-elements/enums";

import { capitalize } from "lodash";

export const parseElementVariables = ({
  reactElementName,
  domainName,
  selectedElementMetadata,
}: {
  reactElementName: string;
  domainName: string;
  selectedElementMetadata: any;
}) => {
  const elementTestTitle = selectedElementMetadata.elementTestTitle
    .replace(":domainName", capitalize(domainName))
    .replace(/:reactElementName/gim, reactElementName);
  const elementAbsolutePath = selectedElementMetadata.elementAbsolutePath
    .replace(":domainName", domainName)
    .replace(/:reactElementName/gim, reactElementName);

  return {
    elementTestTitle,
    elementAbsolutePath,
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

const cwd = process.cwd();

export const parseTargetVariables = ({
  path,
  target,
}: {
  path: string;
  target: string;
}) => {
  const paths = path?.split("/");
  const element = paths[paths.length - 1];
  const elementPath = paths.slice(0, paths.length - 1).join("/");

  const templateFolder = `${__dirname}/../templates/${config.architecture.type}/${target}`;
  const destinationFolder = `${cwd}/src/${config.architecture.domains_folder_name}/${elementPath}`;

  return {
    element,
    elementPath,
    templateFolder,
    destinationFolder,
  };
};
