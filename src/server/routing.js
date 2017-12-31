import render from './render';

import {
  home,
  examples
} from './controller';

import {
  HOME_ROUTE,
  EXAMPLES_ROUTE
} from '../shared/routes';

const routing = (server) => {
  server.get(HOME_ROUTE, (req, res) => {
    res.send(render(req.url, home()));
  });

  server.get(EXAMPLES_ROUTE, (req, res) => {
    res.send(render(req.url, examples()));
  });

  server.get("*", (req, res) => {
    const pageNotFound = 404;
    res.status(pageNotFound).send(render(req.url));
  });
}

export default routing;
