import chalk from "chalk";

const printCliMainMessage = () =>
  console.log(
    chalk.yellowBright(
      `
    Build Elegant Elements for React - (Beer)

         ]~,"-.-~~[
       .=])' (;  ([
       | ]:: '    [
       '=]): .)  ([
         |:: '    |
          ~~----~~
        `
    )
  );

const outputProcess = (message: string) => console.log(chalk.yellow(message));

const outputFatalError = (message: string) =>
  console.log(chalk.redBright(message));

const outputFileCreation = (filePath: string) =>
  console.log(`${chalk.yellowBright(`1       ${filePath}`)}`);

const outputFileCreationProcess = (createdFiles: string[]) => {
  console.log(
    chalk.yellowBright(`
-------------------

    Order: ${Math.random().toString().slice(2, 6)}

-------------------
`)
  );

  console.log(chalk.yellowBright(chalk.bold(`\nQty.   Description\n`)));

  createdFiles.forEach((filePath) => outputFileCreation(filePath));

  console.log(
    chalk.yellowBright(
      "----------------------------------------------------------------------------------------------------------------\n\n"
    )
  );

  console.log(chalk.yellowBright(chalk.bold(`TOTAL: ${createdFiles.length}`)));
};

export {
  printCliMainMessage,
  outputProcess,
  outputFatalError,
  outputFileCreationProcess,
};
