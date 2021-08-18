import path from "path";
import config from "../config";
// import { ReactStructure } from ".";

interface Props {
  domainName: string;
  reactElementName: string;
}

// export const generateHookMetadata = ({
//   domainName,
//   reactElementName,
// }: Props): ReactStructure => {
//   const destinationFolder = path.join(
//     process.cwd(),
//     config.domainsPath,
//     domainName,
//     "hooks"
//   );
//   const templateFolder = path.resolve(__dirname, "../templates/react/hook");

//   return {
//     destinationFolder,
//     templateFolder,
//     reactElementName,
//   };
// };
