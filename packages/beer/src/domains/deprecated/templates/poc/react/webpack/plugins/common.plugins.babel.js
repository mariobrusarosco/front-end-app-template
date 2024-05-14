import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import webpack from "webpack";
import projectConfiguration from "../../app-configuration.json";

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: resolve("src", "index.html")
  }),
  new webpack.ProvidePlugin({
    React: "react"
  }),
  new webpack.DefinePlugin({
    APPLICATION: JSON.stringify(projectConfiguration)
  })
];

export default commonPlugins;
