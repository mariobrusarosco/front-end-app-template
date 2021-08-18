import Inquirer from "inquirer";

export const newDomainName = async (): Promise<string | Promise<any>> => {
  const question = [
    {
      name: "domainName",
      type: "input",
      message: "Type your new domain name",
    },
  ];

  const { domainName } = await Inquirer.prompt<{ domainName: string }>(
    question
  );

  console.log({ domainName });

  if (!domainName) {
    console.log(
      `You must provide a name for your new domain to continue the process`
    );

    return newDomainName();
  }

  return domainName;
};
