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
    templateFolder: "templates/default/domains/{{domainName}}/ui/components",
    destinationFolder: "ui/components",
    reactElementType: "component",
    elementTestTitle:
      "Domains | :domainName | UI | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/components/:reactElementName",
  },
  ["hook"]: {
    elementFolder: "ui/hooks",
    templateFolder: "templates/default/domains/{{domainName}}/ui/hooks",
    destinationFolder: "ui/hooks",
    reactElementType: "hook",
    elementTestTitle: "Domains | :domainName | UI | Hooks | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/hooks/:reactElementName",
  },
  ["service"]: {
    elementFolder: "application/services",
    templateFolder:
      "templates/default/domains/{{domainName}}/application/services",
    destinationFolder: "application/services",
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
    templateFolder: string;
    destinationFolder: string;
    reactElementType: string;
    elementTestTitle: string;
    elementAbsolutePath: string;
  };
};

export const LEGACY_ARCHITECTURE_SKELETON: ReactElementMetadata = {
  ["component"]: {
    elementFolder: "components",
    templateFolder: "templates/legacy/domain/{{domainName}}/components",
    destinationFolder: "components",
    reactElementType: "component",
    elementTestTitle:
      "Domains | :domainName | UI | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/components/:reactElementName",
  },
  ["hook"]: {
    elementFolder: "hooks",
    templateFolder: "templates/legacy/domain/{{domainName}}/hooks",
    destinationFolder: "hooks",
    reactElementType: "hook",
    elementTestTitle:
      "Domains | :domainName | UI | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/components/:reactElementName",
  },
  ["context"]: {
    elementFolder: "ui/components",
    templateFolder: "templates/legacy/domain/{{domainName}}/contexts",
    destinationFolder: "contexts",
    reactElementType: "context",
    elementTestTitle:
      "Domains | :domainName | UI | Components | :reactElementName",
    elementAbsolutePath: "@domains/:domainName/ui/components/:reactElementName",
  },
};

export enum ArchitectureTypes {
  DEFAULT = "default",
  LEGACY = "legacy",
}

export const architectures: {
  [key in ArchitectureTypes]: ReactElementMetadata;
} = {
  [ArchitectureTypes.DEFAULT]: DEFAULT_ARCHITECTURE_SKELETON,
  [ArchitectureTypes.LEGACY]: LEGACY_ARCHITECTURE_SKELETON,
};
