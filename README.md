# decentapp

decent's official boilerplate for web applications.

## Getting Started

### Prerequisites

* `node` / `npm`

* `yarn`

### Setup

```sh
$ git clone https://github.com/decentorganization/decentapp
```

```sh
$ yarn install
```

## Commands

To start a development environment:

```sh
$ yarn develop
```

In another tab:

```sh
$ yarn develop:webpack
```

To build a production application:

```sh
$ yarn build
```

To run the production application:

```sh
$ yarn start
```

To stop the production application:

```sh
$ yarn stop
```

To run tests:

```sh
$ yarn test
```

To lint the `src/` directory:

```sh
$ yarn lint
```

### Githooks

To execute `yarn test`:

```sh
$ yarn precommit
```

To execute `yarn test && yarn build`:

```sh
$ yarn prepush
```

## Application Structure

The application (found in `src/`) contains a few components:

* `client/`
  * `index.jsx`
* `server/`
  * `controller.js`
  * `index.js`
  * `render.jsx`
  * `routing.js`
* `shared/`
  * `components/`
    * `Example.jsx`
    * `Footer.jsx`
    * `ModalExample.jsx`
    * `NavExample.jsx`
  * `pages/`
    * `Examples.jsx`
    * `Home.jsx`
    * `NotFound.jsx`
  * `utils/`
    * `isProduction.js`
  * `App.jsx`
  * `config.js`
  * `routes.js`

### client/

`client/` is a folder for client-side only javascripts.

#### index.jsx

`client/index.jsx` is the root React app container and handles rendering the application. It also
injects some globals into our application.

### server/

`server/` is a folder for server-side only javascripts.

#### controller.js

`server/controller.js` exports functions that are meant to be passed to server-side routes. The data
returned by these functions ends up accessible on the client via `window.__SERVER_STATE__`. A new
controller function should be made for each route.

#### index.js

`server/index.js` bootstraps the Express server for our application.

#### render.jsx

`server/render.jsx` renders our React application and injects some server-side values into it.

#### routing.js

`server/routing.js` enables server-side rendering and routing for our React application.

### `shared/`

`shared/` is a folder for isomorphic (client-side and server-side) javascripts.

#### `components/`

`shared/components/` is a folder to store React components that do not share their own route (i.e.,
they are not an entire page of our application).

##### `Example.jsx`

`shared/components/Example.jsx` is an example of a functional component that displays input data. It
also uses JSS for styling.

##### `Footer.jsx`

`shared/components/Footer.jsx` is the application footer.

##### `ModalExample.jsx`

`shared/components/ModalExample.jsx` is an example of a Bootstrap 4 modal.

##### `Nav.jsx`

`shared/components/Nav.jsx` is the application navbar.

#### `pages/`

`shared/pages/` is a folder that contains React applications that have their own routes (i.e., they
are an entire page of our application).

##### `Examples.jsx`

`shared/pages/Examples.jsx` is an example of a robust component class that extends the
React.Component class. It includes an asynchronous fetch that updates the state of the component
upon completion.

##### `Home.jsx`

`shared/pages/Home.jsx` is the application homepage.

##### `NotFound.jsx`

`shared/pages/NotFound.jsx` is the page displayed upon a 404 error.

#### `utils/`

`shared/utils/` is a folder that contains any miscellaneous functions to be used around the
application.

##### `isProduction.js`

`shared/utils/isProduction.js` contains a function that returns a boolean `true` or `false` (based
on whether the application was run via `yarn develop` or `yarn start`)

#### `App.jsx`

`shared/App.jsx` is the inner container for our React app. It also handles client-side routing.

#### `config.js`

`shared/config.js` contains constants relevant to the configuration of our application.

#### `routes.js`

`shared/routes.js` contains routes to be used as URLs throughout the application.

Made with :heart: in Cleveland.

