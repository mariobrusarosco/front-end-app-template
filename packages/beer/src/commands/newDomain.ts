import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import questions from "../questions";
import config from "../config";
import path from "path";
import { printCommandInitialMessage, printFileCreationResult } from "../io";
const copy = require("copy-template-dir");

const { domains } = config;

const run = async () => {
  printCommandInitialMessage("Creating your new Domain...");

  const rawDomainName = await questions.askAboutNewDomainName();
  const sanitizedDomainName = rawDomainName.trim().replace(/\s+/gim, "-");

  const vars = { domainName: sanitizedDomainName };

  const templateFolder = path.join(__dirname, "..", "templates", "domain");
  const destinationFolder = path.join(process.cwd(), domains.directories_path);

  copy(
    templateFolder,
    destinationFolder,
    vars,
    (err: Error, createdFiles: string[]) => {
      if (err) throw err;

      createdFiles.forEach((filePath) => printFileCreation(filePath));

      printFileCreationResult(createdFiles.length);
    }
  );
};

const createCommand: CLICommand = {
  command: AvailableCommands.NEW_DOMAIN,
  describe: "Creates a new domain",
  handler: run,
};

export default createCommand;
function printFileCreation(filePath: string): void {
  throw new Error("Function not implemented.");
}
