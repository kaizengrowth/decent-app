import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { HOME_ROUTE } from '../routes';

const NotFound = () => (
  <div className="container mt-4">
    <Helmet title="Page Not Found" />
    <div className="row">
      <div className="col-12">
        <h1>Page Not Found</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p>Whoops! The page you're looking for doesn't exist!</p>
        <Link to={ HOME_ROUTE }>Return Home</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
