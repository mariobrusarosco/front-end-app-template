import { askAboutElementName } from "../../io/input/react/ask-about-element-name";
import { askAboutElementType } from "../../io/input/react/ask-about-element-type";
import { askAboutDomainName } from "../../io/input/tool-config/current-domains";

const action = async () => {
  const { domain } = await askAboutDomainName();
  const { type } = await askAboutElementType();
  const { name } = await askAboutElementName(type);

  console.log({ name, type, domain });
};

export const GENERATE_COMMAND = {
  name: "generate",
  description: "Generates a React: Component or Context",
  aliases: ["garcom", "chefe", "fera", "mestre", "campeao"],
  action,
};
