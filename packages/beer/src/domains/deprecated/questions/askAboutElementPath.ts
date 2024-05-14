import Inquirer from "inquirer";

export const askAboutElementPath = async (): Promise<string | Promise<any>> => {
  const question = [
    {
      name: "elementPath",
      type: "input",
      message: "Type your Elements's path",
    },
  ];

  const { elementPath } = await Inquirer.prompt<{ elementPath: string }>(
    question
  );

  if (!elementPath) {
    console.log(
      `You must provide a name for your new Element to continue the process`
    );

    return askAboutElementPath();
  }

  return { elementPath };
};
