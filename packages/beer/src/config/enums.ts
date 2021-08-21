import { ArchitectureTypes } from "../architecture";

export interface DomainsConfig {
  path_to_domains_folder: string;
  folders: string[];
  includes: string[];
  excludes: string[];
}

// export interface ElementsConfig {
//   [typeofstring]: {
//     elementFolder: string;
//   };
// }

export interface ArchitectureConfig {
  type: ArchitectureTypes;
  domains_folder_name: string;
}

export interface Configuration {
  domains: DomainsConfig;
  architecture: ArchitectureConfig;
  // elements: ElementsConfig;
}
