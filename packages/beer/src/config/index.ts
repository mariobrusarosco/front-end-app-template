import { printConfigurationError } from "../io";
import { getDomainsFolders } from "./domains";
import { Configuration, DomainsConfig, ReactElementsConfig } from "./enums";
// const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");

const toml = require("toml");
const fs = require("fs");

const currentWorkingDir = process.cwd();

const createCnfig = () => {
  try {
    const config = toml.parse(
      fs.readFileSync(currentWorkingDir + "/pilsen.toml")
    ) as Configuration;

    const domainsData = config.domains as DomainsConfig;
    const reactElementsData = config.reactElements as ReactElementsConfig;

    return {
      ...config,
      domains: {
        ...domainsData,
        folders: getDomainsFolders({ config }),
      },
      reactElements: reactElementsData,
      // architecture: { ...architectureData },
    };
  } catch (error) {
    printConfigurationError(error);

    process.exit(-1);
  }
};

export default createCnfig();
