import webpack from 'webpack';
import { BuildOptions } from './types/config-types';

export const webpackResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    return  {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
      }
} 
