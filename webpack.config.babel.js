import path from 'path';

import { APP_PORT } from './src/shared/config';
import { isProduction } from './src/shared/utils';

export default {
  entry: [
    "./src/app"
  ],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction ? "/static/" : `https://localhost:${APP_PORT}/dist/`
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
    port: APP_PORT
  }
}
