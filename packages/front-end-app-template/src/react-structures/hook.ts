import path from "path";
import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

export const hook = ({
  domainName,
  reactElementName,
}: Props): ReactStructure => {
  return {
    outDir: path.join(process.cwd(), "src", domainName, "hooks"),
    inDir: path.resolve(__dirname, "../templates/react/hook"),
    reactElementName,
  };
};
