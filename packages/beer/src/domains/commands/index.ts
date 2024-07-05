import { AVAILABLE_COMMANDS } from "./enum-and-interfaces";
import { Command } from "commander";

export const setupCommands = (program: Command) => {
  AVAILABLE_COMMANDS.forEach(({ name, action, aliases, description }) => {
    program
      .command(name)
      .description(description || "")
      .action(action)
      .aliases(aliases);
  });
};
