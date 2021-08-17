import Inquirer from "inquirer";

// Inquirer.registerPrompt(
//   "autocomplete",
//   require("inquirer-autocomplete-prompt")
// );

export const domainName = () => {
  const question = [
    {
      name: "domainName",
      type: "list",
      message: "Type your domain name",
      choices: ["a", "asdsa", "investments"],
    },
  ];
  return Inquirer.prompt(question);
};
