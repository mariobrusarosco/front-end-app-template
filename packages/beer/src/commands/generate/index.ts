import { Argv, Options } from "yargs";
import { AvailableCommands } from "../enums";
import { CLICommand } from "../interfaces";
import createDomainCommand from "./domain";
import createElementCommand from "./element";
import createPocCommand from "./poc";

const elementCreationCommands = ["component", "hook", "service"];
const generateSubCommands: {
  [key in string]: any;
} = {
  element: createElementCommand,
  domain: createDomainCommand,
  poc: createPocCommand,
};

const getSubcommandByTarget = (target: string) => {
  if (elementCreationCommands.includes(target))
    return generateSubCommands["element"];

  return generateSubCommands[target];
};

const run = async (args: any) => {
  const target = args.target;

  const subCommand = getSubcommandByTarget(target);

  subCommand(args);
};

const createCommand: CLICommand = {
  command: `${AvailableCommands.GENERATE} [target] [path]`,
  describe: "Generates a React Element: element|domain|poc [path]",
  aliases: ["garcom", "chefe", "fera", "g", "campeao"],
  handler: run,
};

export default createCommand;
