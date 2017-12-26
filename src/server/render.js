import { CONTAINER_CLASS, STATIC_PATH, APP_PORT } from '../shared/config';
import { isProduction } from '../shared/utils';

const render = (title) => {
  return `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div class="${CONTAINER_CLASS}"></div>
      <script src="${isProduction ? STATIC_PATH : `http://localhost:${APP_PORT}/dist`}/js/bundle.js"></script>
    </body>
  </html>`;
}

export default render;
