import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector(APP_CONTAINER_SELECTOR)
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector(APP_CONTAINER_SELECTOR)
    );
  });
}
