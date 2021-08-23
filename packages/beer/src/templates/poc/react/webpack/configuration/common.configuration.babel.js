import path from "path";

const commonConfiguration = (() => ({
  entry: ["./src/index.tsx"],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve("node_modules"), path.resolve("src")]
  }
}))();

export default commonConfiguration;
