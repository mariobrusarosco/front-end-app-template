import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import initCommand from "./commands/init";
import createCommand from "./commands/create";
import newDomainCommand from "./commands/newDomain";
import { AvailableCommands } from "./commands/enums";

const typedCommands = hideBin(process.argv);

// Commands
yargs(typedCommands)
  .command(initCommand)
  .command(createCommand)
  .command(newDomainCommand);

// Groups
yargs.group(
  [AvailableCommands.CREATE, AvailableCommands.NEW_DOMAIN],
  "Commands for active origin projects"
);

// HELP
yargs.alias(["cardapio", "menu"], "help").help().argv;
