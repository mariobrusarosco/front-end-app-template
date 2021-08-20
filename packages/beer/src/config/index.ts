import path from "path";
import { getDomainsFolders } from "./domains";
import { Configuration, DomainsConfig } from "./enums";
// const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");
// var appRoot = require("app-root-path");
var toml = require("toml");
var fs = require("fs");

const cwd = process.cwd();
const config = toml.parse(fs.readFileSync(cwd + "/pilsen.toml"));

const domainsData = config.domains as DomainsConfig;

export default {
  domains: {
    ...domainsData,
    folders: getDomainsFolders({ config }),
  },
};
