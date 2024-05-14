import { currentDomains } from "./currentDomains";
import { reactElementType } from "./reactElementType";
import { reactElementName } from "./reactElementName";
import { newDomainName } from "./newDomainName";
import { askAboutElementPath } from "./askAboutElementPath";
import { pocName } from "./pocName";
import { pocType } from "./pocType";
import { autoStart } from "./autoStart";

export default {
  askAboutAutoStart: autoStart,
  askAboutPocName: pocName,
  askAboutPocType: pocType,
  askAboutElementPath,
  askAboutNewDomainName: newDomainName,
  askAboutCurrentDomains: currentDomains,
  askAboutReactElementType: reactElementType,
  askAboutReactElementName: reactElementName,
};
