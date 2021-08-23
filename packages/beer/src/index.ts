import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import createCommand from "./commands/create";

const typedCommands = hideBin(process.argv);

console.log(
  chalk.yellowBright(
    `

   ]~,"-.-~~[
 .=])' (;  ([
 | ]:: '    [
 '=]): .)  ([
   |:: '    |
    ~~----~~
  `
  )
);

yargs(typedCommands)
  // .usage("")
  .demandCommand()
  .command(createCommand)
  .options({})
  .help()
  .epilog("Build Elegant Elements for React - 2021").argv;

// yargs(typedCommands)
//   .usage(`-------`)
//   .demandCommand(1)
//   .option("h", {
//     alias: "help",
//   })
//   .command(createCommand)
//   .help()
//   .epilog("Beer CLI - 2021").argv;

// Groups
// yargs.group(
//   [AvailableCommands.CREATE, AvailableCommands.NEW_DOMAIN],
//   "Commands for active origin projects"
// );

// // HELP
// yargs.alias(["cardapio", "menu"], "help").help().epilog("2021").completion()
//   .argv;
