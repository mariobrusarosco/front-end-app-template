#!/usr/bin/env node

import packageJson from "../package.json";
import { Command } from "commander";
import { printCliMainMessage } from "./domains/io/output";
import { setupToolCommands } from "./domains/commands/index";
import { InitializeTool } from "./domains/tool-config";

const run = async () => {
  const program = new Command();

  printCliMainMessage();

  await InitializeTool();
  await setupToolCommands(program);

  // TODO: Get from package.json
  program.version(
    packageJson.version,
    "-v, --version",
    "output the current version"
  );
  program.parse(process.argv);
};

run();
