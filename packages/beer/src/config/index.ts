import path from "path";
// const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");
// var appRoot = require("app-root-path");
var toml = require("toml");
var fs = require("fs");

const cwd = process.cwd();

const getDomainsFolders = (domainsPath: string) => {
  return fs.readdirSync(path.join(process.cwd(), domainsPath));
};

export default (() => {
  const config = toml.parse(fs.readFileSync(cwd + "/pilsen.toml"));

  const domainsPath = config.paths.domains;
  const domains = getDomainsFolders(domainsPath);

  return {
    domainsPath,
    domains,
  };
})();
