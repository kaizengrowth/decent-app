import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HOME_ROUTE,
  EXAMPLES_ROUTE,
  NOT_FOUND_ROUTE
} from '../routes';

const Nav = () => (
  <nav>
    <ul>
      {
        [
          { route: HOME_ROUTE, label: "Home" },
          { route: EXAMPLES_ROUTE, label: "Examples" },
          { route: NOT_FOUND_ROUTE, label: "Not Found" }
        ]
        .map(link => (
          <li key={ link.route }>
            <NavLink to={ link.route } activeStyle={{ color: "green" }} exact>
              { link.label }
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Nav;
