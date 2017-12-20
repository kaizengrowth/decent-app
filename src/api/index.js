import express from 'express';
import compression from 'compression';

import { NAME, API_PORT, STATIC_PATH } from '../shared/config.js';
import { isProduction } from '../shared/utils.js';

import render from './render';

const api = express();

api.use(compression());
api.use(STATIC_PATH, express.static("dist"));
api.use(STATIC_PATH, express.static("public"));

api.get("/", (req, res) => {
  res.send(render(NAME));
});

api.listen(API_PORT, () => {
  console.log(`Server running on port ${API_PORT}.`);
  console.log(`Server running in ${ isProduction ? "PRODUCTION" : "DEVELOPMENT" } mode.`);
});
