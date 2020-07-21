const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".sass", ".scss", ".css"],
    mainFields: ["main", "module", "browser"],
  },
  entry: "./src/index.tsx",
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: ["url-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/renderer"),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, "./dist/renderer"),
    filename: "js/[name].js",
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
