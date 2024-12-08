import webpack from 'webpack';
import { webpackBuildConfig } from './config/webpack/webpackBuildConfig';
import { BuildMode, BuildPaths } from './config/webpack/types/config-types';
import path from 'path';

const paths: BuildPaths = {
  entryPath: path.resolve(__dirname, "src", "index.ts"),
  outputPath: path.resolve(__dirname, "dist"),
  htmlPath: path.resolve(__dirname, "index.html"),
}

const mode: BuildMode = 'development';

const isDev = mode === 'development';

const config: webpack.Configuration = webpackBuildConfig({
  mode,
  paths,
  isDev
})

export default config;