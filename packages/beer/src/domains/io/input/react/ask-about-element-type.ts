import Inquirer from "inquirer";
import { getConfig } from "../../../tool-config/helpers";
import { outputFatalError } from "../../output";

export const askAboutElementType = () => {
  try {
    const elements = getConfig()["react-elements"];
    const choices = Object.keys(elements);
    const question = [
      {
        name: "type",
        type: "list",
        message: "Choose the available React Elements",
        choices,
      },
    ];

    return Inquirer.prompt<{ type: string }>(question);
  } catch (error) {
    outputFatalError(`[QUESTION - Element Type] - ${error}`);
    return Promise.reject(error);
  }
};
