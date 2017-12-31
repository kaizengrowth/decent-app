import React from 'react';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../shared/App';
import isProduction from '../shared/isProduction';
import {
  APP_CONTAINER_CLASS,
  STATIC_PATH,
  WDS_PORT
} from '../shared/config';

const render = (location, state, context) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={ location } context={ context }>
      <App />
    </StaticRouter>
  );
  const head = Helmet.rewind();

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${html}</div>
        <script>
          window.__SERVER_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="${isProduction ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  );
};

export default render;
