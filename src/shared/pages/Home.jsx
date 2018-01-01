import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import ModalExample from '../components/ModalExample';
import { NAME } from '../config';

const styles = {
  hoverMe: {
    "&:hover": {
      color: "red"
    }
  },
  specialButton: {
    composes: ["btn", "btn-primary"],
    backgroundColor: "limegreen"
  }
};

const Home = injectSheet(styles)(({ classes }) => (
  <div>
    <Helmet
      meta={[
        { name: "og:title", content: NAME },
        { name: "description", content: "decent's official boilerplate for web apps." }
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3 md-4 mb-4">{ NAME }</h1>
            <p>
              decent's official boilerplate for web applications. It uses:
            </p>
            <ul>
              <li>
                <a href="https://expressjs.com">Express</a> as a light webserver
              </li>
              <li>
                <a href="https://reactjs.org">React</a> as a component library
              </li>
              <li>
                <a href="https://getbootstrap.com">Bootstrap 4</a> as a styling framework
              </li>
              <li>
                <a href="http://cssinjs.org">JSS</a> as a component CSS library
              </li>
              <li>
                <a href="http://webpack.js.org">Webpack</a> as a module bundler and development server
              </li>
            </ul>
            <p>
              and many other cutting edge web technologies. It includes bitchin' features such as hot
              module reloading and server side rendering of React components. The documentation
              includes plenty of references to common work patterns to get shit done fast.
            </p>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3 className="mb-3">Bootstrap</h3>
          <p>
            This project uses Bootstrap 4 for layout and theming. Press the button below to see
            Bootstrap 4 in action.
          </p>
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
          <p className={ classes.hoverMe }>
            This project uses JSS for JavaScript-based styling. Hover over this paragraph to see JSS
            in action.
          </p>
          <button className={ classes.specialButton }>Bootstrap Extended</button>
        </div>
      </div>
    </div>
    <ModalExample />
  </div>
));

export default Home;
