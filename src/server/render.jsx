import React from 'react';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { SheetsRegistry, JssProvider } from 'react-jss';

import App from '../shared/App';
import isProduction from '../shared/utils/isProduction';
import {
  APP_CONTAINER_CLASS,
  SERVER_SIDE_JSS_CLASS,
  STATIC_PATH,
  WDS_PORT
} from '../shared/config';

const render = (location, state, context = {}) => {
  const registry = new SheetsRegistry();
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={ location } context={ context }>
      <JssProvider registry={ registry }>
        <App />
      </JssProvider>
    </StaticRouter>
  );
  const head = Helmet.rewind();

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="icon" type="image/png" href="${STATIC_PATH}/img/favicon.png">
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <style class=${SERVER_SIDE_JSS_CLASS}>${registry.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">
          ${html}
        </div>
        <script>
          window.__SERVER_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="${isProduction ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  );
};

export default render;
