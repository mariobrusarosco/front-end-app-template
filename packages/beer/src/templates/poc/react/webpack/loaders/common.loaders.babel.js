const commonLoaders = [
  {
    test: /\.ts(x)?$/,
    use: "ts-loader",
    exclude: /node_modules/
  }
];

export default commonLoaders;
