import { resolve } from "path";

import commonConfiguration from "../configuration/common.configuration.babel";
import commonPlugins from "../plugins/common.plugins.babel";
import commonLoaders from "../loaders/common.loaders.babel";

import productionPlugins from "../plugins/production.plugins.babel";

const productionConfiguration = env => ({
  ...commonConfiguration,
  mode: "production",
  devtool: "false",
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].chunk.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [...commonLoaders]
  },
  plugins: [...commonPlugins, ...productionPlugins]
});

export default productionConfiguration;
