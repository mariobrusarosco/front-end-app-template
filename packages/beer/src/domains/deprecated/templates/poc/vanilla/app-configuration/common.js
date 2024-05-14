import packageJSON from "../package.json";

const commonConfiguration = {
  APP_NAME: "POC",
  ENVIRONMENT: process.env.NODE_ENV,
  VERSION: packageJSON.version,
  ROOT_URL: "/",
  LOCAL_STORAGE_KEY: `local__poc`
};

export default commonConfiguration;
