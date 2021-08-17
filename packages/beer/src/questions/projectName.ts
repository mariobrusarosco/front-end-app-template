import Inquirer from "inquirer";

export const projectName = async () => {
  const question = [
    {
      name: "projectName",
      type: "input",
      message: "Type your projects name",
    },
  ];

  await Inquirer.prompt(question);
};

export const projectNameApproachTwo = async () => {
  const question = [
    {
      name: "projectName",
      type: "input",
      message: "Type your projects name",
    },
  ];

  const { projectName } = await Inquirer.prompt(question);

  if (!projectName) {
    console.log(
      `You must provide a name for your project to continue the process`
    );

    process.exit(-1);
  }

  return projectName;
};
