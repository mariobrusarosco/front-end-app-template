import path from "path";
import { getConfig } from "../../tool-config/helpers";

export const generateFolderPaths = ({
  inputedElementType,
  inputedDomain,
}: {
  inputedElementType: string;
  inputedDomain: string;
}) => {
  const cwd = process.cwd();
  const config = getConfig();

  const usersDomainsFolderPath = config.domains.pathToDomainsFolder;
  const structureOfSelectedElement =
    config["react-elements"][inputedElementType];

  const templateFolder = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "templates",
    "react",
    inputedElementType
  );
  const destinationFolder = path.join(
    cwd,
    usersDomainsFolderPath,
    inputedDomain,
    structureOfSelectedElement.folder
  );

  return {
    templateFolder,
    destinationFolder,
  };
};
