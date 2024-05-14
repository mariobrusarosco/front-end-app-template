import Inquirer from "inquirer";

enum POC_TYPES {
  VANILLA = "vanilla",
  REACT = "react",
}

export const pocType = async (): Promise<string | Promise<any>> => {
  const question = [
    {
      name: "pocType",
      type: "list",
      choices: Object.values(POC_TYPES),
    },
  ];

  return Inquirer.prompt<{ pocType: string }>(question);
};
