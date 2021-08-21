var copy = require("recursive-copy");
const Handlebars = require("handlebars");
var through = require("through2");

export const recursiveCopy = ({
  templateFolder,
  destinationFolder,
  reactElementName,
}: {
  templateFolder: string;
  destinationFolder: string;
  reactElementName: string;
}) => {
  const givenOptions: any = {
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
    // filter: ["**/*", "!.htpasswd"],
    rename: function (filePath: string) {
      return filePath.replace("{{reactElementName}}", "lorem");
    },
    transform: function (src: any, dest: any, stats: any) {
      console.log("transform", src, dest);

      return through(function (chunk: any, enc: any, done: any) {
        const template = Handlebars.compile(chunk.toString());
        const parsedTemplate = template({ reactElementName: "lorem" });

        done(null, parsedTemplate);
      });
    },
  };

  copy(templateFolder, destinationFolder, givenOptions); // .on(copy.events.COPY_FILE_START, function (copyOperation: any) {
  //   console.info("Copying file " + copyOperation.src + "...");
  // })
  // .on(copy.events.COPY_FILE_COMPLETE, function (copyOperation: any) {
  //   console.info("Copied to " + copyOperation.dest);
  // })
  // .on(copy.events.ERROR, function (error: any, copyOperation: any) {
  //   console.error("Unable to copy " + copyOperation.dest);
  // })
  // .then(function (results: any) {
  //   console.info(results.length + " file(s) copied");
  // })
  // .catch(function (error: any) {
  //   return console.error("Copy failed: " + error);
  // });
};
