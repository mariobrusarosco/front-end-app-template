const commonLoaders = [
  {
    test: /\.ts$/,
    use: "ts-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      "style-loader",
      "css-loader",
      // "sass-loader",
    ],
  },


];

export default commonLoaders;
