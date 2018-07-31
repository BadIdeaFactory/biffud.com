import React, { Component, Fragment } from "react";

import { Helmet } from "../partials";

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Error" />
        Sheepswarm 404
      </Fragment>
    );
  }
}

ErrorPage.propTypes = {};
