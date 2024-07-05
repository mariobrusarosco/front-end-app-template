import Inquirer from "inquirer";
import { outputFatalError } from "../../output";

export const askAboutElementName = (elementType: string) => {
  try {
    const question = [
      {
        name: "name",
        type: "input",
        message: `Type the name of your ${elementType}`,
      },
    ];
    return Inquirer.prompt<{ name: string }>(question);
  } catch (error) {
    outputFatalError(`[QUESTION - Element Name] - ${error}`);
    return Promise.reject(error);
  }
};
