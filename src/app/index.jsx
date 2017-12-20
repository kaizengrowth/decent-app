import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { CONTAINER_SELECTOR } from '../shared/config';

import App from './app';

ReactDOM.render(<App />, document.querySelector(CONTAINER_SELECTOR));
