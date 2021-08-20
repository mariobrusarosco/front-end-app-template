import path from "path";
import fs from "fs";
import { Configuration } from "./enums";

const cwd = process.cwd();

export const getDomainsFolders = ({
  config,
}: {
  config: Configuration;
}): string[] => {
  const domainsToBeIncluded = config.domains.includes || [];
  const domainsToBeExcluded = config.domains.excludes || [];

  if (domainsToBeIncluded.length) return domainsToBeIncluded;

  const rawListOfDomains = fs.readdirSync(
    path.join(cwd, config.domains.directories_path)
  );

  const filteredDomains = rawListOfDomains.filter(
    (domain) => !domainsToBeExcluded.includes(domain)
  );

  return filteredDomains;
};
