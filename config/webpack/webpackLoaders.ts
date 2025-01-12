import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config-types';

export const webpackLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? "[name]__[local]--[hash:base64:8]" : "[hash:base64:8]"
          },
        }
      },
      "sass-loader",
    ],
  }

  return [
    svgLoader,
    typeScriptLoader,
    styleLoader,
  ]
}