import path from "path";
import config from "../config";
import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

export const generateFunctionComponentMetadata = ({
  domainName,
  reactElementName,
}: Props): ReactStructure => {
  const destinationFolder = path.join(
    process.cwd(),
    config.domains,
    domainName,
    "components"
  );
  const templateFolder = path.resolve(
    __dirname,
    "../templates/react/functionComponent"
  );

  return {
    destinationFolder,
    templateFolder,
    reactElementName,
  };
};
