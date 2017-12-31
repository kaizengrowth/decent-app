import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => (
  <div>
    <Helmet
      title="Page Not Found"
      meta={[
        { name: "og:title", content: "Page Not Found" },
        { name: "description", content: "decent's official boilerplate for web apps." }
      ]}
    />
    <h1>Page not found</h1>
  </div>
);

export default NotFound;
