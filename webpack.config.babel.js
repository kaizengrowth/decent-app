import webpack from 'webpack';
import path from 'path';

import { APP_PORT } from './src/shared/config';
import { isProduction } from './src/shared/utils';

export default {
  entry: [
    "react-hot-loader/patch",
    "./src/app"
  ],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction ? "/static/" : `http://localhost:${APP_PORT}/dist/`
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ }
    ]
  },
  devtool: isProduction ? false : "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: APP_PORT,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
