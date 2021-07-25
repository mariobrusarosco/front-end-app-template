import yargs from "yargs";
import { hideBin } from 'yargs/helpers'


// import initCommand from "./commands/init"
import createCommand from "./commands/create"

const typedCommands =  hideBin(process.argv)
console.log("starting the init command!!", typedCommands)

if (!typedCommands.length) {
  console.log(
    `Please type 'app-template --help' to see the available commands`
  );
}


export default yargs(typedCommands).command(...createCommand)









console.log({ yargs });
