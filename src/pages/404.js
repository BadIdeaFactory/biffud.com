import React, { Component, Fragment } from "react";

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Fragment>Sheepswarm 404</Fragment>;
  }
}

ErrorPage.propTypes = {};
