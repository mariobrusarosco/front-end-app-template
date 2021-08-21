// import config from "../config";
// export const mountElementsSkeleton: any = ({ config }: { config: any }) => {
//   return Object.entries(config.elements).map((element: any) => {
//     console.log(element);
//     return {
//       [element]: {
//         elementFolder: element.elementFolder,
//       },
//     };
//   });
// };

export enum DEFAULT_ARCHITECTURE_ELEMENTS {
  FUNCTION_COMPONENT = "functionComponent",
  HOOK = "hook",
  SERVICE = "service",
  ROUTES = "routes",
}

export const DEFAULT_ARCHITECTURE_ELEMENTS_LIST = Object.keys(
  DEFAULT_ARCHITECTURE_ELEMENTS
);

export const DEFAULT_ARCHITECTURE_SKELETON = {
  ["component"]: {
    elementFolder: "ui/components",
    // templateFolder: "ui/components",
    // destinationFolder: "ui/components",
    reactElementType: "component",
    elementTestTitle:
      "Domains | :domainName | UI | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/components/:reactElementName",
  },
  ["hook"]: {
    elementFolder: "ui/hooks",
    reactElementType: "hook",
    elementTestTitle: "Domains | :domainName | UI | Hooks | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/hooks/:reactElementName",
  },
  ["service"]: {
    elementFolder: "application/services",
    reactElementType: "service",
    elementTestTitle:
      "Domains | :domainName | Application | Services | :reactElementName",
    elementAbsolutePath:
      "@domains/:domainName/application/services/:reactElementName",
  },
};

export enum LEGACY_ARCHITECTURE_ELEMENTS {
  FUNCTION_COMPONENT = "functionComponent",
  CONTEXT = "context",
  HOOK = "hook",
}

export const LEGACY_ARCHITECTURE_ELEMENTS_LIST = Object.keys(
  LEGACY_ARCHITECTURE_ELEMENTS
);

export type ReactElementMetadata = {
  [key in string]: {
    elementFolder: string;
    templateFolder?: string;
    destinationFolder?: string;
    reactElementType: string;
    elementTestTitle?: string;
    elementAbsolutePath?: string;
  };
};

export const LEGACY_ARCHITECTURE_SKELETON: ReactElementMetadata = {
  ["component"]: {
    elementFolder: "components",
    reactElementType: "component",
    elementTestTitle: "Domains | :domainName | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/components/:reactElementName",
  },
  ["hook"]: {
    elementFolder: "hooks",
    reactElementType: "hook",
    elementTestTitle: "Domains | :domainName | Hooks | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/components/:reactElementName",
  },
  ["context"]: {
    elementFolder: "contexts",
    reactElementType: "context",
    elementTestTitle: "Domains | :domainName | Context | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/contexts6/:reactElementName",
  },
};

export enum ArchitectureTypes {
  DEFAULT = "default",
  LEGACY = "legacy",
}

export const architectures: {
  [key in ArchitectureTypes]: {
    reactElements: ReactElementMetadata;
    templateFolder: string;
  };
} = {
  [ArchitectureTypes.DEFAULT]: {
    reactElements: DEFAULT_ARCHITECTURE_SKELETON,
    templateFolder: "templates/default",
  },
  [ArchitectureTypes.LEGACY]: {
    reactElements: LEGACY_ARCHITECTURE_SKELETON,
    templateFolder: "templates/legacy",
  },
};
