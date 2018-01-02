import React from 'react';
import Helmet from 'react-helmet';

import Example from '../components/Example';

const Examples = () => (
  <div className="container mt-4">
    <Helmet
      title="Examples"
      meta={[
        { property: "og:title", content: "Examples" },
        { name: "description", content: "A page to show examples."}
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>Examples</h1>
        <p>Here is an index page with subcomponents.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <Example />
      </div>
      <div className="col-4">
        <Example />
      </div>
      <div className="col-4">
        <Example />
      </div>
    </div>
  </div>
);

export default Examples;
