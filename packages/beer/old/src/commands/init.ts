

export module App {
  export class SomeClass {
    getName(): string {
      return 'name';
    }
  }
  export class OtherClass {
    getName(): string {
      return 'name';
    }
  }
}


// const yargs = require("yargs");
// const path = require("path");
// const copy = require("copy-template-dir");
// const core = require("../core");

// const initCommand = yargs.command(
//   "init",
//   "This command start your Front End Build configuration",
//   (yargs) => {
//     (async () => {
//       console.log("Creating template");

//       // Project Name
//       const projectName = await core.getProjectName();

//       const inDir = path.resolve(__dirname, "../templates/react");
//       const outDir = path.join(process.cwd(), projectName);

//       const vars = { projectName };

//       copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
//         if (err) throw err;
//         createdFiles.forEach((filePath) => console.log(`Created ${filePath}`));
//         console.log("done!");
//       });
//     })();
//   }
// );

// // console.log("Create Galhofa", initCommand);

// module.exports = initCommand.argv;
