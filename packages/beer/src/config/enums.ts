export interface DomainsConfig {
  directories_path: string;
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
  type: string;
  configdomains_folder_name: string;
}

export interface Configuration {
  domains: DomainsConfig;
  architecture: ArchitectureConfig;
  // elements: ElementsConfig;
}
