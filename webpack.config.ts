import webpack from 'webpack';
import { webpackBuildConfig } from './config/webpack/webpackBuildConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/webpack/types/config-types';
import path from 'path';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entryPath: path.resolve(__dirname, "src", "index.tsx"),
    outputPath: path.resolve(__dirname, "dist"),
    htmlPath: path.resolve(__dirname, "index.html"),
  }
  
  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = webpackBuildConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
  return config;  
};