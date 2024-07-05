import chalk from "chalk";

export const printCommandInitialMessage = (message: string) => {
  console.log(
    chalk.yellowBright(`
-------------------
  ${message}
-------------------
`)
  );
};

export const printFileCreation = (filePath: string) =>
  console.log(`${chalk.yellowBright(`1       ${filePath}`)}`);

export const printFileCreationProcess = (createdFiles: string[]) => {
  console.log(
    chalk.yellowBright(`
-------------------

    Order: ${Math.random().toString().slice(2, 6)}

-------------------
`)
  );

  console.log(chalk.yellowBright(chalk.bold(`\nQty.   Description\n`)));

  createdFiles.forEach((filePath) => printFileCreation(filePath));

  console.log(
    chalk.yellowBright(
      "----------------------------------------------------------------------------------------------------------------\n\n"
    )
  );

  console.log(chalk.yellowBright(chalk.bold(`TOTAL: ${createdFiles.length}`)));
};

export const printConfigurationError = (error: Error | string) => {
  console.log(
    chalk.redBright(`
[CONFIGURATION ERROR] - Please, reach the 'Config Doc'and check if your .toml file matches the mandatory configuration schema

ERROR: ${error}
`)
  );
};
