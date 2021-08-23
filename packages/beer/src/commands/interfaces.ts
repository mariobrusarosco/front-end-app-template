import { CommandBuilder } from "yargs";

export type CLICommand = {
  command: string;
  aliases?: string | string[];
  describe?: string;
  builder?: CommandBuilder;
  handler: (args: any) => void;
};
