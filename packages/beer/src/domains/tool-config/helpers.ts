export const getConfig = () => globalThis.BEER_CONFIG;

export const getAvailableReactElements = () => {
  const config = getConfig();

  return Object.keys(config["react-elements"]).join(" | ");
};
