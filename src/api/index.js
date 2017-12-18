import express from 'express';
import compression from 'compression';

import { NAME, PORT, STATIC } from '../shared/config.js';

import render from './render';

const app = express();

app.use(compression());
app.use(STATIC, express.static("dist"));
app.use(STATIC, express.static("public"));

app.get("/", (req, res) => {
  res.send(render(NAME));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
