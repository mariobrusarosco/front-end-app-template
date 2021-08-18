import Inquirer from "inquirer";
import fuzzy from "fuzzy";
import chalk from "chalk";

Inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

import config from "../config";

const domains = config.domains;

const searchForDomains = (answers: any, input: any = "") => {
  const results = fuzzy.filter(input, domains).map((item) => item.original);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(results);
    }, 400);
  });
};

export const currentDomains = () => {
  const question = [
    {
      name: "domainName",
      type: "autocomplete",
      message: "Type your domain name",
      emptyText:
        "No domain was found. If you need to create a new one use the command 'beer new'",
      pageSize: 4,
      source: searchForDomains,
    },
  ];

  return Inquirer.prompt(question);
};
