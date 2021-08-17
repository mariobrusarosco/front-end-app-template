import path from "path";
import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

export const context = ({
  domainName,
  reactElementName,
}: Props): ReactStructure => {
  return {
    outDir: path.join(process.cwd(), "src", domainName, "context"),
    inDir: path.resolve(__dirname, "../templates/react/context"),
    reactElementName,
  };
};
