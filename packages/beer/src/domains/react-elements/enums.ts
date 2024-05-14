export enum ReactElementTypes {
  COMPONENT = "component",
  CONTEXT = "context",
  HOOK = "hook",
}

export interface ReactStructure {
  elementFolder: string;
  templateFolder: string;
  reactElementName: string;
}

export type reactElementMetadata = {
  [key in ReactElementTypes]: ReactStructure;
};

// export type reactElementMetadata = {
//   [key in ReactElementTypes]: ({
//     domainName,
//     reactElementName,
//   }: {
//     domainName: string;
//     reactElementName: string;
//   }) => ReactStructure;
// };
