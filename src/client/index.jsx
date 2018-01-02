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

const wrapper = (element) => (
  <BrowserRouter>
    <AppContainer>
      { element }
    </AppContainer>
  </BrowserRouter>
);

ReactDOM.render(
  wrapper(<App />),
  document.querySelector(APP_CONTAINER_SELECTOR)
);

if (module.hot) {
  module.hot.accept("../shared/App", () => {
    const HotReloadedApp = require("../shared/App").default;
    ReactDOM.render(
      wrapper(<HotReloadedApp />),
      document.querySelector(APP_CONTAINER_SELECTOR)
    );
  });
}
