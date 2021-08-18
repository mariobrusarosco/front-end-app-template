import path from "path";
import config from "../config";
import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

export const generateContextMetadata = ({
  domainName,
  reactElementName,
}: Props): ReactStructure => {
  const destinationFolder = path.join(
    process.cwd(),
    config.domainsPath,
    domainName,
    "context"
  );
  const templateFolder = path.resolve(__dirname, "../templates/react/context");

  return {
    destinationFolder,
    templateFolder,
    reactElementName,
  };
};
