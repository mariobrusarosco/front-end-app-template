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

export { printCliMainMessage, outputProcess, outputFatalError };
