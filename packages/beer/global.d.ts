import { ToolConfiguration } from "./src/domains/tool-config/enums-and-interfaces";

// declare module "app-root-path";

declare global {
  var BEER_CONFIG: ToolConfiguration;
}
