import { AvailableCommands } from "./enums";
import { CLICommandOld } from "./interfaces";

const run = async () => {
  console.log("Initializing your project");
};

const initCommand: CLICommandOld = {
  command: AvailableCommands.INIT,
  describe: "Initialize your project",
  handler: run,
};

export default initCommand;
