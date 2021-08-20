import chalk from "chalk";

export const printFileCreationResult = (filesOrNumberOfFiles: number) => {
  console.log(
    chalk.yellowBright(`\n\n${filesOrNumberOfFiles} bottles were consumed!\n`)
  );
};

export const printCommandInitialMessage = (message: string) => {
  console.log(chalk.green(`\n ${message}`));
};

export const printFileCreation = (filePath: string) => {
  console.log(chalk.yellowBright(`-- Created ${filePath}`));
};
