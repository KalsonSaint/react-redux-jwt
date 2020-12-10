import path from "path";

export default {
  devtool: "eval-source-map",
  mode: "development",
  entry: path.join(__dirname, "/client/index.js"),
  output: {
    path: path.resolve(__dirname, "./client"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: path.join(__dirname, "client"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
