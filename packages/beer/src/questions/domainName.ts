import Inquirer from "inquirer";
import fuzzy from "fuzzy";
import chalk from "chalk";
import { DOMAINS } from "../core/enums";

Inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

import config from "../config";

console.log(config);

const searchForDomains = (answers: any, input: any = "") => {
  const domains = config.domains;

  const results = fuzzy.filter(input, domains).map((item) => item.original);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(results);
    }, 400);
  });
};

export const domainName = () => {
  const question = [
    {
      name: "domainName",
      type: "autocomplete",
      message: "Type your domain name",
      emptyText:
        "No domain was found. If you need to create a new one use the command 'beer new'",
      default: DOMAINS.GOALS,
      pageSize: 4,
      source: searchForDomains,
    },
  ];

  return Inquirer.prompt(question);
};
