import { outputFatalError, outputProcess } from "../io/output";
import { generateDomainsList } from "./domains";
import { ToolConfiguration } from "./enums-and-interfaces";

const toml = require("toml");
const fs = require("fs");

const currentWorkingDir = process.cwd();

const InitializeTool = async () => {
  await validateConfigFile();
  return await generateDomainsList();
};

const validateConfigFile = async () =>
  new Promise((resolve) => {
    outputProcess("[CONFIGURATION] - STARTING CONFIG VALIDATION FILE");

    try {
      const toolConfig = toml.parse(
        fs.readFileSync(currentWorkingDir + "/pilsen.toml")
      ) as ToolConfiguration;

      globalThis.BEER_CONFIG = toolConfig;
      resolve(toolConfig);
    } catch (error) {
      outputFatalError(`[CONFIGURATION]" -
      Please, reach the 'Config Doc'and check if your .toml file exists or if it matches the mandatory configuration schema
      ${error}`);

      process.exit(-1);
    } finally {
      outputProcess("[CONFIGURATION] - FINISHED CONFIG VALIDATION FILE");
    }
  });

export { InitializeTool };
