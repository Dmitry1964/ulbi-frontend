import HtmlWebpackPlugin from "html-webpack-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config-types"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const webpackPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {

    const {paths} = options
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlPath
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "style/[name].[contenthash:8].css",
            chunkFilename: "style/[name].[contenthash:8].css"
        })
    ]
}

