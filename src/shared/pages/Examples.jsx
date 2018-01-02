import React from 'react';
import Helmet from 'react-helmet';

import Example from '../components/Example';

class Examples extends React.Component {
  constructor() {
    super();

    this.state = {
      examples: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      json = json.slice(0, 9);
      this.setState({ examples: json });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <Helmet
          title="Examples"
          meta={[
            { property: "og:title", content: "Examples" },
            { name: "description", content: "A page to show examples."}
          ]}
        />
        <div className="row">
          <div className="col-12">
            <h1>Examples</h1>
            <p>
              Here is an index page with subcomponents. We are making an asynchronous fetch to the
              JSONPlaceholder API and iterating over a set of users to fill a grid of "Example"
              components.
            </p>
          </div>
        </div>
        <div className="row">
            {
              this.state.examples.map((example, index) => {
                return (
                  <div className="col-md-4" key={ index }>
                    <Example example={ example } />
                  </div>
                );
              })
            }
        </div>
      </div>
    );
  }
}

export default Examples;
