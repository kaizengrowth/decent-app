import $ from 'jquery';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { NAME } from '../config';
import {
  HOME_ROUTE,
  EXAMPLES_ROUTE,
  NOT_FOUND_ROUTE
} from '../routes';

const handleNavLinkClick = () => {
  $("body").scrollTop(0);
  $(".js-navbar-collapse").collapse("hide");
}

const Nav = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button className="navbar-toggler navbar-toggler-right"
      type="button"
      role="button"
      data-toggle="collapse"
      data-target=".js-navbar-collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to={ HOME_ROUTE } className="navbar-brand">{ NAME }</Link>
    <div className="js-navbar-collapse collapse navbar-collapse">
      <ul className="navbar-nav mr-auot">
        {
          [
            { route: HOME_ROUTE, label: "Home" },
            { route: EXAMPLES_ROUTE, label: "Examples" },
            { route: NOT_FOUND_ROUTE, label: "Not Found" }
          ]
          .map(link => (
            <li className="nav-item" key={ link.route }>
              <NavLink className="nav-link"
                to={ link.route }
                activeStyle={{ color: "white" }}
                exact
                onClick={ handleNavLinkClick }>
                { link.label }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
);

export default Nav;
