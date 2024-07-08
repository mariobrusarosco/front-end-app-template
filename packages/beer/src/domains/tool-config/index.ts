import { validateConfigFile } from "./file-verification";
import { generateDomainsList } from "./generate-domains-list";

const InitializeTool = async () => {
  await validateConfigFile();
  await generateDomainsList();
};

export { InitializeTool };
