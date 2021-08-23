import Inquirer from "inquirer";
import config from "../config";

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

  const emptyGivenDomain = !domainName;
  const domainExists = config.domains.folders.includes(domainName);

  if (emptyGivenDomain) {
    console.log(
      "You must provide a name for your new domain to continue the process"
    );

    return newDomainName();
  }

  if (domainExists) {
    console.log("This domain already exists. Please type a new domain name");

    return newDomainName();
  }

  return domainName.trim().replace(/\s+/gim, "-");
};
