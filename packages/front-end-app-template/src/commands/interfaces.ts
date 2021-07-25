import { AvailableCommands } from "./enums";

export type Command = [AvailableCommands, string, () => void]
