console.log("Beer!");
// import chalk from "chalk";
// import yargs from "yargs";
// import { hideBin } from "yargs/helpers";
// import createCommand from "./commands/create";
// import generateCommand from "./commands/generate";
// import { printCliMainMessage } from "./io";

// const typedCommands = hideBin(process.argv);

// printCliMainMessage();

// yargs(typedCommands)
//   // .usage("")
//   .demandCommand()
//   .command(createCommand)
//   .command(generateCommand)
//   // .showHelpOnFail(false, "Specify --help for available options")
//   .help()
//   .updateStrings({
//     "Commands:": "Menu\n\n",
//   })
//   .wrap(100)
//   .epilog("Build Elegant Elements for React - 2021").argv;

// // yargs(typedCommands)
// //   .usage(`-------`)
// //   .demandCommand(1)
// //   .option("h", {
// //     alias: "help",
// //   })
// //   .command(createCommand)
// //   .help()
// //   .epilog("Beer CLI - 2021").argv;

// // Groups
// // yargs.group(
// //   [AvailableCommands.CREATE, AvailableCommands.NEW_DOMAIN],
// //   "Commands for active origin projects"
// // );

// // // HELP
// // yargs.alias(["cardapio", "menu"], "help").help().epilog("2021").completion()
// //   .argv;
