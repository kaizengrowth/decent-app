import isProduction from '../shared/isProduction';
import {
  APP_CONTAINER_CLASS,
  STATIC_PATH,
  WDS_PORT
} from '../shared/config';

const render = (title) => {
  return `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div class="${APP_CONTAINER_CLASS}"></div>
      <script src="${isProduction ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
    </body>
  </html>`;
}

export default render;
