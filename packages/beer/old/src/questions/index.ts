const inquirer = require("inquirer");

// TODO move all questions to separated files
const askAboutProjectName = () => {
  const question = [
    {
      name: "projectName",
      type: "input",
      message: "Type your projects name",
    },
  ];
  return inquirer.prompt(question);
};

module.exports = {
  askAboutProjectName,
};
