import Inquirer from "inquirer";
import fuzzy from "fuzzy";
import config from "../config";

Inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

const domainsFolders = config.domains.folders;

const searchForDomains = (_: any, input: string = "") => {
  const results = fuzzy
    .filter(input, domainsFolders)
    .map((item) => item.original);

  return new Promise((resolve) => {
    resolve(results);
  });
};

export const currentDomains = () => {
  const question = [
    {
      name: "domainName",
      type: "autocomplete",
      message: "Type your domain name",
      emptyText:
        "No domain was found. If you need to create a new one use the command 'beer new domain'",
      pageSize: 4,
      source: searchForDomains,
    },
  ];

  return Inquirer.prompt(question);
};
