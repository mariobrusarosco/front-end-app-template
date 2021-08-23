import { Argv, Options } from "yargs";
import { AvailableCommands } from "../enums";
import { CLICommand } from "../interfaces";
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

  console.log({ target });

  subCommand();
};

const createCommand: CLICommand = {
  command: `${AvailableCommands.CREATE} <target>`,
  describe: "Creates a React Element, a Domain or a POC",
  aliases: ["consagrado"],
  builder: (yargs: Argv) => yargs.default("value", "true"),
  handler: run,
};

// const createCommand: CLICommand = {
//   command: "status <key>",
//   describe: "Creates a React Element, a Domain or a POC",
//   // aliases: ["consagrado"],
//   // builder: (yargs: Argv) => yargs.default("value", "true"),
//   builder: (yargs: Argv) => yargs.default("value", "true"),
//   handler: run,
// };

export default createCommand;
