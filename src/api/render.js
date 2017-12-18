import { STATIC } from '../shared/config';

const render = (title) => {
  return `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
    </body>
  </html>`;
}

export default render;
