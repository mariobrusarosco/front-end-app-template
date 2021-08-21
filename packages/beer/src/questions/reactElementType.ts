import Inquirer from "inquirer";
import { architectures, ArchitectureTypes } from "../architecture";
import config from "../config";

const selectedArchitecture = architectures[config.architecture.type];

export const reactElementType = () => {
  const question = [
    {
      name: "reactElementType",
      type: "list",
      message: "Type your react type",
      choices: Object.keys(selectedArchitecture.reactElements),
    },
  ];

  return Inquirer.prompt(question);
};
