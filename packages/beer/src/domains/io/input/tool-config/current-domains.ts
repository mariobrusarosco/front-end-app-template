import Inquirer from "inquirer";
import fuzzy from "fuzzy";
import { getConfig } from "../../../tool-config/helpers";
import { outputFatalError } from "../../output";

Inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

const searchForDomains = (_: any, input: string = "") => {
  const trackedFolders = getConfig().domains.trackedFolders;
  const results = fuzzy
    .filter(input, trackedFolders)
    .map((item) => item.original);

  return new Promise((resolve) => {
    resolve(results);
  });
};

export const askAboutDomainName = () => {
  try {
    const question = [
      {
        name: "domain",
        type: "autocomplete",
        message: "Type your domain name",
        emptyText:
          "No domain was found. If you need to create a new one use the command 'beer new domain'",
        pageSize: 4,
        source: searchForDomains,
      },
    ];

    return Inquirer.prompt<{ domain: string }>(question);
  } catch (error) {
    outputFatalError(`[QUESTION - Domain name] - ${error}`);
    return Promise.reject(error);
  }
};
