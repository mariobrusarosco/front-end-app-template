import path from "path";
// import { mountElementsSkeleton } from "../architecture";
import { getDomainsFolders } from "./domains";
import {
  ArchitectureConfig,
  Configuration,
  DomainsConfig,
  ReactElementsConfig,
} from "./enums";
// const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");
// var appRoot = require("app-root-path");
var toml = require("toml");
var fs = require("fs");

const cwd = process.cwd();
const config = toml.parse(
  fs.readFileSync(cwd + "/pilsen.toml")
) as Configuration;

const domainsData = config.domains as DomainsConfig;
const reactElementsData = config.reactElements as ReactElementsConfig;

export default {
  ...config,
  domains: {
    ...domainsData,
    folders: getDomainsFolders({ config }),
  },
  reactElements: reactElementsData,
  // architecture: { ...architectureData },
};
