const setConfigByEnvironment = (() => {
  return {
    ...require(`./${process.env.NODE_ENV}`),
    ...require("./common"),
    configCreatedAt: new Date()
  };
})();

export default setConfigByEnvironment;
