import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  example: {
    backgroundColor: "#292b2c",
    borderRadius: "5px",
    color: "rgba(255, 255, 255, 0.5)",
    margin: "5px",
    padding: "10px",
  }
}

const Example = injectSheet(styles)(({ classes, example }) => (
  <div className={ classes.example }>
    <p>
      <b>Name:</b> { example.name }
    </p>
    <p>
      <b>Email:</b> { example.email }
    </p>
    <p>
      <b>City: </b> { example.address.city }
    </p>
  </div>
));

export default Example;
