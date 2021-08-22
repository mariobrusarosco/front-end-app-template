import { currentDomains } from "./currentDomains";
import { reactElementType } from "./reactElementType";
import { reactElementName } from "./reactElementName";
import { newDomainName } from "./newDomainName";
import { pocName } from "./pocName";
import { autoStart } from "./autoStart";

export default {
  askAboutAutoStart: autoStart,
  askAboutPocName: pocName,
  askAboutNewDomainName: newDomainName,
  askAboutCurrentDomains: currentDomains,
  askAboutReactElementType: reactElementType,
  askAboutReactElementName: reactElementName,
};
