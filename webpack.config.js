const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = env.MODE === "development";

  const config = {
    mode: env.MODE,
    entry: path.resolve(__dirname, "src", "index.js"),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev
      ? {
          open: true,
          hot: true,
          port: env.mode ?? 3000,
        }
      : undefined,

    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "template", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                configFile: path.resolve(process.cwd(), "babel.config.js"),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: "asset/resource",
        },
      ],
    },
  };

  return config;
};
