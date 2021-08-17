import { CommandBuilder } from "yargs";
import { AvailableCommands } from "./enums";

export type CLICommand = {
  command: AvailableCommands,
  aliases?: string | string[],
  describe?: string
  builder?: CommandBuilder,
  handler: () => void
}
