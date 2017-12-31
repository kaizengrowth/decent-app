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
        <div>
          <Link to={ HOME_ROUTE }>Home</Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
