import React from 'react';
import Helmet from 'react-helmet';

const Examples = () => (
  <div>
    <Helmet
      title="Examples"
      meta={[
        { property: "og:title", content: "Examples" },
        { name: "description", content: "A page to show examples."}
      ]}
    />
    <h1>Examples</h1>
  </div>
);

export default Examples;
