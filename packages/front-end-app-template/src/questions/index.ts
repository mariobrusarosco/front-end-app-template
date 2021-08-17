import Inquirer  from "inquirer"

// TODO move all questions to separated files
const askAboutProjectName = () => {
  const question = [
    {
      name: "projectName",
      type: "input",
      message: "Type your projects name",
    },
  ];
  return Inquirer.prompt(question);
};

export default {
  askAboutProjectName,
};
