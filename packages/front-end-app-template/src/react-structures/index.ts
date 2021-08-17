import { context } from "./context";
import { functionComponent } from "./functionComponent";
import { hook } from "./hook";

export enum ReactElementTypes {
  FUNCTION_COMPONENT = "functionComponent",
  CONTEXT = "context",
  HOOK = "hook",
}

export interface ReactStructure {
  outDir: string;
  inDir: string;
  reactElementName: string;
}

export type struct = {
  [key in ReactElementTypes]: ({
    domainName,
    reactElementName,
  }: {
    domainName: string;
    reactElementName: string;
  }) => ReactStructure;
};

const structures: struct = {
  [ReactElementTypes.FUNCTION_COMPONENT]: functionComponent,
  [ReactElementTypes.CONTEXT]: context,
  [ReactElementTypes.HOOK]: hook,
};

export const generateStructure = ({
  domainName,
  reactElementType,
  reactElementName,
}: {
  domainName: string;
  reactElementType: ReactElementTypes;
  reactElementName: string;
}) => {
  const struct = structures[reactElementType];

  return struct({ domainName, reactElementName });
};
