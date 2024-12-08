import HtmlWebpackPlugin from "html-webpack-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config-types"

export const webpackPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {

    const {paths} = options
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlPath
        }),
        new webpack.ProgressPlugin(),
    ]
}

