import { Command } from "commander";
import { printCliMainMessage } from "./domains/io/output";
import { setupToolCommands } from "./domains/commands/index";
import { InitializeTool } from "./domains/tool-config";
import cheerio from "cheerio";
import axios from "axios";

const run = async () => {
  const program = new Command();

  printCliMainMessage();

  await InitializeTool();
  await setupToolCommands(program);

  // TODO: Get from package.json
  program.version("0.2.3", "-v, --version", "output the current version");
  program.parse(process.argv);
};

run();

// const startScrapper = async () => {
//   const url = "https://br.betano.com/";

//   const data = await axios.get(url);

//   console.log({ data });
// };

// startScrapper();
