import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import webpack from "webpack";
const commonPlugins = [
  new HtmlWebpackPlugin({
    template: resolve("src", "index.html"),
  })
];

export default commonPlugins;
