import { AVAILABLE_COMMANDS } from "./enum-and-interfaces";
import { Command } from "commander";

export const setupToolCommands = (program: Command) =>
  AVAILABLE_COMMANDS.forEach((setupFn) => {
    const command = setupFn();

    program
      .command(command.name)
      .description(command.description || "")
      .action(command.action)
      .aliases(command.aliases);
  });
