import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config-types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const webpackPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const { paths, isDev } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.htmlPath,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:8].css",
      chunkFilename: "style/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
    }),
    isDev ? new ReactRefreshWebpackPlugin() : undefined,
    // new webpack.HotModuleReplacementPlugin()
  ];
};
