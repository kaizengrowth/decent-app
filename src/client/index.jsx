import 'babel-polyfill';

import $ from 'jquery';
import Tether from 'tether';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from '../shared/App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';

window.jQuery = $;
window.Tether = Tether;
require('bootstrap');

console.log(window.__SERVER_STATE__);

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <App />
    </AppContainer>
  </BrowserRouter>,
  document.querySelector(APP_CONTAINER_SELECTOR)
);

if (module.hot) {
  module.hot.accept("../shared/App", () => {
    const NextApp = require("../shared/App").default;
    ReactDOM.render(
      <BrowserRouter>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </BrowserRouter>,
      document.querySelector(APP_CONTAINER_SELECTOR)
    );
  });
}
