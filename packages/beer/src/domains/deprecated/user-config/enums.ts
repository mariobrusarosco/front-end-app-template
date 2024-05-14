import { ArchitectureTypes } from "../architecture";

export interface DomainsConfig {
  pathToDomainsFolder: string;
  folders: string[];
  includes: string[];
  excludes: string[];
}

export type ReactElementsConfig = {
  [key in string]: {
    elementFolder: string;
    reactElementType: string;
    elementTestTitle: string;
    elementAbsolutePath: string;
  };
};

export interface ArchitectureConfig {
  type: ArchitectureTypes;
  domains_folder_name: string;
}

export interface Configuration {
  domains: DomainsConfig;
  architecture: ArchitectureConfig;
  reactElements: ReactElementsConfig;
}
