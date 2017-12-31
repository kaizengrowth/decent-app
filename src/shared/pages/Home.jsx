import React from 'react';
import Helmet from 'react-helmet';

import ModalExample from '../components/ModalExample';
import { NAME } from '../config';

const Home = () => (
  <div>
    <Helmet
      meta={[
        { name: "og:title", content: NAME },
        { name: "description", content: "decent's official boilerplate for web apps." }
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 md-4">{ NAME }</h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3 className="mb-3">Bootstrap</h3>
          <p>
            <button
              type="button"
              role="button"
              data-toggle="modal"
              data-target=".js-modal-example"
              className="btn btn-primary">
              Open Modal
            </button>
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h3 className="mb-3">JSS</h3>
        </div>
      </div>
    </div>
    <ModalExample />
  </div>
);

export default Home;
