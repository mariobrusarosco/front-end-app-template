import path from "path";
import fs from "fs";
import { outputFatalError, outputProcess } from "../io/output";
import { getConfig } from "./helpers";

export const generateDomainsList = async () =>
  new Promise((resolve) => {
    outputProcess("[CONFIGURATION] - GENERATING DOMAINS LIST");

    try {
      const domains = getConfig()?.domains;
      const domainsToBeIncluded = domains?.includes || [];
      const domainsToBeExcluded = domains.excludes || [];

      if (!domains.pathToDomainsFolder) return resolve(null);
      if (domainsToBeIncluded.length > 0) return resolve(domainsToBeIncluded);

      const domainsFolderPath = path.join(
        process.cwd(),
        domains.pathToDomainsFolder
      );

      const trackedFolders = fs
        .readdirSync(domainsFolderPath)
        ?.filter((domain) => !domainsToBeExcluded.includes(domain));

      domains.trackedFolders = trackedFolders;
      resolve(trackedFolders);
    } catch (error) {
      outputFatalError(`[CONFIGURATION] - ${error}`);
    } finally {
      outputProcess("[CONFIGURATION] - DOMAINS LIST DONE");
    }
  });
