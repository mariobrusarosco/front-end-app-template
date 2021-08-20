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
    templateFolder: "templates/default/{{domainName}}/ui/components",
    reactElementName: "component",
  },
  ["hook"]: {
    elementFolder: "ui/components",
    templateFolder: "templates/default/{{domainName}}/ui/hooks",
    reactElementName: "hook",
  },
  ["service"]: {
    elementFolder: "ui/components",
    templateFolder: "templates/default/{{domainName}}/application/services",
    reactElementName: "service",
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

export const LEGACY_ARCHITECTURE_SKELETON = {
  ["component"]: {
    elementFolder: "components",
    templateFolder: "templates/default/{{domainName}}/components",
    reactElementName: "component",
  },
  ["hook"]: {
    elementFolder: "hooks",
    templateFolder: "templates/legacy/{{domainName}}/hooks",
    reactElementName: "hook",
  },
  ["context"]: {
    elementFolder: "ui/components",
    templateFolder: "templates/legacy/{{domainName}}/contexts",
    reactElementName: "context",
  },
};

export enum ArchitectureTypes {
  DEFAULT = "default",
  LEGACY = "legacy",
}

export const architectures = {
  [ArchitectureTypes.DEFAULT]: DEFAULT_ARCHITECTURE_SKELETON,
  [ArchitectureTypes.LEGACY]: LEGACY_ARCHITECTURE_SKELETON,
};
