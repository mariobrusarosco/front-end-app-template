import path from "path";
import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

export const functionComponent = ({
  domainName,
  reactElementName,
}: Props): ReactStructure => {
  return {
    outDir: path.join(process.cwd(), "src", domainName, "components"),
    inDir: path.resolve(__dirname, "../templates/react/function-component"),
    reactElementName,
  };
};
