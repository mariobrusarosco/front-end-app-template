import path from "path";
import fs from "fs";
import { outputFatalError, outputProcess } from "../io/output";
import { getConfig } from "./helpers";

export const generateDomainsList = async () =>
  new Promise((resolve) => {
    outputProcess("[CONFIGURATION] - GENERATING DOMAINS LIST");

    try {
      const config = getConfig();
      const domainsToBeIncluded = config.domains.includes || [];
      if (domainsToBeIncluded.length) return domainsToBeIncluded;

      const domainsToBeExcluded = config.domains.excludes || [];

      const domainsPath = path.join(
        process.cwd(),
        config.domains.pathToDomainsFolder
      );
      const trackedFolders = fs
        .readdirSync(domainsPath)
        ?.filter((domain) => !domainsToBeExcluded.includes(domain));

      config.domains.trackedFolders = trackedFolders;
      resolve(trackedFolders);
    } catch (error) {
      outputFatalError(`[CONFIGURATION] - ${error}`);
    } finally {
      outputProcess("[CONFIGURATION] - DOMAINS LIST DONE");
    }
  });
