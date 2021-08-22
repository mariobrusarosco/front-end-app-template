import { copyAndMovePocTemplate } from "../FileSystem";
import { printCommandInitialMessage, printFileCreationProcess } from "../io";
import { AvailableCommands } from "./enums";
import { CLICommand } from "./interfaces";
import path from "path";

const currentWorkingDirectory = process.cwd();

const run = async () => {
  printCommandInitialMessage("NEW POC");

  const templateFolder = path.join(
    __dirname,
    "..",
    "templates",
    "poc",
    "vanilla"
  );
  const destinationFolder = path.join(currentWorkingDirectory, "vanilla");

  console.log({
    templateFolder,
    destinationFolder,
  });

  copyAndMovePocTemplate({
    templateFolder,
    destinationFolder,
    handleFileCreation: (err, createdFiles) => {
      if (err) throw err;

      printFileCreationProcess(createdFiles);
    },
  });
};

const pocCommand: CLICommand = {
  command: AvailableCommands.POC,
  describe: "Initialize a POC",
  handler: run,
};

export default pocCommand;
