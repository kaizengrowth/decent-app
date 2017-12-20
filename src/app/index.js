import 'babel-polyfill';

import { CONTAINER_SELECTOR } from '../shared/config';

document.querySelector(CONTAINER_SELECTOR).innerHTML = '<h1>Hello, world!</h1>';
