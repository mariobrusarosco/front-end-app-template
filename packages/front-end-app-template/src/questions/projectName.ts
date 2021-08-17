import Inquirer from "inquirer";

export const projectName = () => {
  const question = [
    {
      name: "projectName",
      type: "input",
      message: "Type your projects name",
    },
  ];
  return Inquirer.prompt(question);
};
