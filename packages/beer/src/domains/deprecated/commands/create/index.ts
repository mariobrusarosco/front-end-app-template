import { Argv, Options } from "yargs";
import { AvailableCommands } from "../enums";
import { CLICommandOld } from "../interfaces";
import createDomainCommand from "./domain";
import createElementCommand from "./element";
import createPocCommand from "./poc";

const createSubCommands: {
  [key in string]: any;
} = {
  element: createElementCommand,
  domain: createDomainCommand,
  poc: createPocCommand,
};

const run = async (args: any) => {
  const target = args.target;
  const subCommand = createSubCommands[target];

  subCommand();
};

const createCommand: CLICommandOld = {
  command: `${AvailableCommands.CREATE} <target>`,
  describe: "Creates a React Element: element|domain|poc",
  aliases: ["consagrado"],
  // builder: (yargs: Argv) => yargs.default("value", "true"),
  handler: run,
};

export default createCommand;
