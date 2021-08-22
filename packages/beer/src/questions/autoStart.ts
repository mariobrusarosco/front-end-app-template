import Inquirer from "inquirer";

export const autoStart = () => {
  const question = [
    {
      name: "shouldAutoStart",
      type: "confirm",
      message: "Do you want to run your POC, like, right now?",
    },
  ];

  return Inquirer.prompt(question);
};
