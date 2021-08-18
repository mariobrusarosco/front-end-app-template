// const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");
import path from "path";
// var appRoot = require("app-root-path");
var toml = require("toml");
var fs = require("fs");

const getDomainsFolders = (domainsPath: string) => {
  return fs.readdirSync(path.join(process.cwd(), domainsPath));
};

export default (() => {
  console.log(process.cwd());
  // domains:
  // try {
  const config = toml.parse(fs.readFileSync(process.cwd() + "/pilsen.toml"));

  const domainsFolders = getDomainsFolders(config.paths.domains);

  // console.log(config, domainsFolders);

  return {
    domains: domainsFolders,
  };
  //   return data;
  // } catch (e) {
  //   console.error(
  //     "Parsing error on line " +
  //       e.line +
  //       ", column " +
  //       e.column +
  //       ": " +
  //       e.message
  //   );
  // }
  // console.log(__dirname);
  // console.log(process.cwd());
  // console.log({ appRoot });
  // explorer
  //   .search()
  //   .then((result: any) => {
  //     console.log({ result });
  //     // result.config is the parsed configuration object.
  //     // result.filepath is the path to the config file that was found.
  //     // result.isEmpty is true if there was nothing to parse in the config file.
  //   })
  //   .catch((error: any) => {
  //     console.log({ error });
  //     // Do something constructive.
  //   });
})();
