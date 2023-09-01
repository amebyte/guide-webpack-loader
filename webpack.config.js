const path = require("path");
module.exports = {
  mode: "development",
  entry: "./pages/index/index.wxml",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.wxs$/,
        loader: path.resolve(__dirname, "./wxsLoder.js"),
        options: {
          closeSelfClosing: true,
        },
      },
      {
        test: /\.wxml$/,
        loader: path.resolve(__dirname, "./wxmlLoader.js"),
        options: {
          closeSelfClosing: true,
        },
      },
    ],
  },
};
