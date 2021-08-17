import Inquirer from "inquirer";

export const reactElementName = () => {
  const question = [
    {
      name: "reactElementName",
      type: "input",
      message: "Type your element's name",
    },
  ];
  return Inquirer.prompt(question);
};
