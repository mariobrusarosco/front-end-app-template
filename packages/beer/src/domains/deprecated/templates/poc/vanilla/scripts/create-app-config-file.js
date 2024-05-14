import fs from "fs";
import appConfiguration from "../app-configuration/index";

fs.writeFile(
  "./app-configuration.json",
  JSON.stringify(appConfiguration),
  err => {
    if (err) {
      console.error(
        "--- [ CREATE CONFIG ERROR - Error when creating project's JSON configuration ] ---"
      );
      throw err;
    }
    console.warn(
      "--- [ PROJECT CONFIGURATION SUCCESS - Project's JSON configuration created at src/ ] ---"
    );
  }
);
