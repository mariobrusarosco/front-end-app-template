import Inquirer from "inquirer";

export const pocName = async (): Promise<string | Promise<any>> => {
  const question = [
    {
      name: "pocName",
      type: "input",
      message: "Type your POC's name",
    },
  ];

  const { pocName: givenName } = await Inquirer.prompt<{ pocName: string }>(
    question
  );

  if (!givenName) {
    console.log(
      `You must provide a name for your new POC to continue the process`
    );

    return pocName();
  }

  return givenName.trim().replace(/\s+/gim, "-");
};
