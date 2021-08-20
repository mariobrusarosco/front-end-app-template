export interface DomainsConfig {
  directories_path: string;
  folders: string[];
  includes: string[];
  excludes: string[];
}

export interface ArchitectureConfig {
  type: string;
}

export interface Configuration {
  domains: DomainsConfig;
  architecture: ArchitectureConfig;
}
