import yargs from "yargs";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";

const run = async () => {
  console.log("Initializing your project");
};

const initCommand: CLICommand = {
  command: AvailableCommands.INIT,
  describe: "Initialize your project",
  handler: run,
};

export default initCommand;
