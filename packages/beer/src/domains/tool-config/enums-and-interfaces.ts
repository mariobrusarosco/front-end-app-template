export interface ToolConfiguration {
  domains: DomainsConfig;
  ["react-elements"]: Record<
    string,
    {
      folder: string;
      type: string;
      testTitle?: string;
      absolutePath?: string;
    }
  >;
}

export interface DomainsConfig {
  pathToDomainsFolder: string;
  includes: string[];
  excludes: string[];
  trackedFolders: string[];
}
