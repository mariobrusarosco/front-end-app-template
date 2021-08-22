import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionPlugin from "compression-webpack-plugin";

const productionPlugins = [
  new CleanWebpackPlugin(),
  new BundleAnalyzerPlugin({
    reportFilename: "../reports/bundle.html",
    analyzerMode: "static",
    openAnalyzer: false
  }),
  new CompressionPlugin({
    filename: "[name].gz[query]",
    algorithm: "gzip"
  }),
  new CompressionPlugin({
    filename: "[name].br[query]",
    algorithm: "brotliCompress",
    compressionOptions: { level: 11 }
  })
];

export default productionPlugins;
