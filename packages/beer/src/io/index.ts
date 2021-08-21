import chalk from "chalk";

export const printFileCreationResult = (numberOfFiles: number) => {
  console.log(
    chalk.yellowBright(
      "----------------------------------------------------------------------------------------------------------------\n\n"
    )
  );
  console.log(chalk.yellowBright(chalk.bold(`TOTAL: ${numberOfFiles}`)));
};

export const printCommandInitialMessage = (message: string) => {
  console.log(chalk.green(`\n ${message}`));
};

export const printFileCreation = (filePath: string) =>
  console.log(`${chalk.yellowBright(`1    ${filePath}`)}`);

export const printFileCreationProcess = (createdFiles: string[]) => {
  console.log(
    chalk.yellowBright(`
-------------------

    Order: 3243

-------------------
`)
  );

  console.log(chalk.yellowBright(`\nQty. \t\n`));

  createdFiles.forEach((filePath) => printFileCreation(filePath));

  printFileCreationResult(createdFiles.length);
};
