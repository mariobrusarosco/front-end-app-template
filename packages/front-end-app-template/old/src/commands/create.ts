const yargs = require("yargs");
const path = require("path");
const copy = require("copy-template-dir");
const core = require("../core");

const createCommand = yargs.command(
  "create",
  "This command creates context, todo...",
  (yargs) => {
    (async () => {
      const typedCommands = yargs.argv._;
      console.log("Creating template", typedCommands[1]);

      // Project Name
      const projectName = await core.getProjectName();

      const inDir = path.resolve(__dirname, "../templates/react/context");
      const outDir = path.join(process.cwd(), "src", "contexts");

      const vars = { contextName: projectName };

      copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
        if (err) throw err;
        createdFiles.forEach((filePath) => console.log(`Created ${filePath}`));
        console.log("done!");
      });
    })();
  }
);

module.exports = createCommand.argv;
