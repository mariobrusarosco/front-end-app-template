import Inquirer from "inquirer";
import fuzzy from "fuzzy";

Inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

const searchForDomains = (answers: any, input: any = "") => {
  // if (!input) return [];

  const results = fuzzy
    .filter(input, Object.values(DOMAINS))
    .map((item) => item.original);

  // console.log({ answers, input, results });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 300);
  });
};

export const domainName = () => {
  const question = [
    {
      name: "domainName",
      type: "autocomplete",
      suggestOnly: true,
      message: "Type your domain name",
      emptyText: "Nothing found!",
      default: "goals",
      pageSize: 4,
      source: searchForDomains,
    },
  ];

  return Inquirer.prompt(question);
};
