import Inquirer from "inquirer";
import config from "../config";

export const reactElementType = () => {
  const question = [
    {
      name: "reactElementType",
      type: "list",
      message: "Type your react type",
      choices: Object.keys(config.reactElements),
    },
  ];

  return Inquirer.prompt(question);
};
