import React from 'react';
import Helmet from 'react-helmet';

import { NAME } from '../config';

const Home = () => (
  <div>
    <Helmet
      meta={[
        { name: "og:title", content: NAME },
        { name: "description", content: "decent's official boilerplate for web apps." }
      ]}
    />
  <h1>{ NAME }</h1>
  </div>
);

export default Home;
