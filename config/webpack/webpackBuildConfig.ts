import webpack from 'webpack';
import { BuildOptions } from './types/config-types';
import { webpackPlugins } from './webpackPlugins';
import { webpackLoaders } from './webpackLoaders';
import { webpackResolvers } from './webpackResolvers';
import { webpackDevServer } from './webpackDevServer';

export const webpackBuildConfig = (options: BuildOptions): webpack.Configuration => {

    const { paths, mode, isDev} = options
    return {
        mode,
        entry: paths.entryPath,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.outputPath,
            clean: true,
        },
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? webpackDevServer(options) : undefined,
    }
}