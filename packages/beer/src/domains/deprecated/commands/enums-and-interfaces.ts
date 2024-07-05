// export enum AvailableCommands {
//   INIT = "mount",
//   CREATE = "create",
//   NEW_DOMAIN = "new-domain",
//   POC = "new-poc",
// }

import { CommandBuilder } from "yargs";

export type CLICommandOld = {
  command: string;
  aliases?: string | string[];
  describe?: string;
  builder?: CommandBuilder;
  handler: (args: any) => void;
};

export const AvailableCommands = {
  CREATE: "create",
  GENERATE: "generate",
  INIT: "init",
};

export const CLI_MAIN_COMMAND = "beer";
