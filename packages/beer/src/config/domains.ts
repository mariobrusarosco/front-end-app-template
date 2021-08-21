import path from "path";
import fs from "fs";
import { Configuration } from "./enums";

const currentWorkingDirectory = process.cwd();

type Props = {
  config: Configuration;
};
export const getDomainsFolders = ({ config }: Props): string[] => {
  const domainsToBeIncluded = config.domains.includes || [];
  const domainsToBeExcluded = config.domains.excludes || [];

  if (domainsToBeIncluded.length) return domainsToBeIncluded;

  const projectsDomainFolderPath = path.join(
    currentWorkingDirectory,
    config.domains.pathToDomainsFolder
  );
  const rawListOfDomains = fs.readdirSync(projectsDomainFolderPath);
  const filteredDomains = rawListOfDomains.filter(
    (domain) => !domainsToBeExcluded.includes(domain)
  );

  return filteredDomains;
};
