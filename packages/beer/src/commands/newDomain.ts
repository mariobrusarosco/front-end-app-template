import chalk from "chalk";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import config from "../config";
import path from "path";
const copy = require("copy-template-dir");

const { domainsPath } = config;

const run = async () => {
  console.log(chalk.green("Creating your new Domain...\n"));

  const domainName = await questions.askAboutNewDomainName();
  const templateFolder = path.join(__dirname, "..", "templates", "domain");
  const destinationFolder = path.join(process.cwd(), domainsPath);

  const vars = { domainName };

  copy(
    templateFolder,
    destinationFolder,
    vars,
    (err: Error, createdFiles: string[]) => {
      if (err) throw err;
      createdFiles.forEach((filePath) =>
        console.log(chalk.red(`Created ${filePath}`))
      );
      console.log(chalk.greenBright("\nDone!\n"));
    }
  );
};

const createCommand: CLICommand = {
  command: AvailableCommands.NEW_DOMAIN,
  describe: "Creates a new domain",
  handler: run,
};

export default createCommand;
