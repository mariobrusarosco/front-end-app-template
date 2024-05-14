import { resolve } from "path";

import commonConfiguration from "../configuration/common.configuration.babel";
import commonPlugins from "../plugins/common.plugins.babel";
import commonLoaders from "../loaders/common.loaders.babel";

const developmentConfiguration = () => ({
  ...commonConfiguration,
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].development.bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: "dist"
  },
  module: {
    rules: [...commonLoaders]
  },
  plugins: [...commonPlugins]
});

export default developmentConfiguration;
