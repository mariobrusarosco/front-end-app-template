import questions from "../questions";
import chalk from "chalk";
import { elementsMetadata, generateElementMetadata } from "../react-elements";
import { ReactElementTypes } from "../react-elements/enums";

// const getProjectName = () => {
//   return new Promise<string>(async (resolve, _) => {
//     const { projectName } = await questions.askAboutProjectName();

//     if (!projectName) {
//       console.log(
//         `You must provide a name for your project to continue the process`
//       );

//       process.exit(-1);
//     }
//     resolve(projectName);
//   });
// };

const getDomainName = () => {
  return new Promise<string>(async (resolve, _) => {
    const { domainName } = await questions.askAboutDomainName();

    if (!domainName) {
      console.log(
        chalk.red(
          `You must provide a name for the domain of your project to continue the process`
        )
      );

      process.exit(-1);
    }

    resolve(domainName);
  });
};

// export const getReactElement = ({ domainName }: { domainName: string }) => {
//   return new Promise<ReactStructure>(async (resolve, _) => {
//     const { reactElementType } = await questions.askAboutReactElementType();
//     const { reactElementName } = await questions.askAboutReactElementName();

//     if (!reactElementName) {
//       console.log(
//         chalk.red(
//           "You must provide a name for your react structure e.g Hook, Function Component..."
//         )
//       );

//       process.exit(-1);
//     }

//     const structure = generateStructure({
//       domainName,
//       reactElementType,
//       reactElementName: reactElementName.trim(),
//     });

//     resolve(structure);
//   });
// };

export const getReactElementMetadata = ({
  reactElementType,
  domainName,
  reactElementName,
}: {
  reactElementType: ReactElementTypes;
  domainName: ReactElementTypes;
  reactElementName: ReactElementTypes;
}) =>
  generateElementMetadata({ domainName, reactElementName, reactElementType });

// export const generateHookMetadata = ({
//   domainName,
//   reactElementName,
// }: Props): ReactStructure => {

//   return {
//     destinationFolder,
//     templateFolder,
//     reactElementName,
//   };
// };

export default {
  // getProjectName,
  getDomainName,
  getReactElementMetadata,
};
