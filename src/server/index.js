import express from 'express';
import compression from 'compression';

import render from './render';
import isProduction from '../shared/isProduction';
import {
  NAME,
  SERVER_PORT,
  STATIC_PATH
} from '../shared/config';

const server = express();

server.use(compression());
server.use(STATIC_PATH, express.static("dist"));
server.use(STATIC_PATH, express.static("public"));

server.get("/", (req, res) => {
  res.send(render(NAME));
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}.`);
  console.log(`Server running in ${ isProduction ? "PRODUCTION" : "DEVELOPMENT" } mode.`);
});
