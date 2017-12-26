import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';
import { CONTAINER_SELECTOR } from '../shared/config';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector(CONTAINER_SELECTOR)
);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector(CONTAINER_SELECTOR)
    );
  });
}
