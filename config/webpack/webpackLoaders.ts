import webpack from 'webpack';

export const webpackLoaders = (): webpack.RuleSetRule[] => {

const typeScriptLoader =         {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

    return  [
        typeScriptLoader,
      ]
}