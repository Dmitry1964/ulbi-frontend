import webpack from 'webpack';
import { BuildOptions } from './types/config-types';
import { webpackPlugins } from './webpackPlugins';
import { webpackLoaders } from './webpackLoaders';
import { webpackResolvers } from './webpackResolvers';

export const webpackBuildConfig = (options: BuildOptions): webpack.Configuration => {

    const { paths, mode } = options
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
            rules: webpackLoaders(),
        },
        resolve: webpackResolvers(),
    }
}