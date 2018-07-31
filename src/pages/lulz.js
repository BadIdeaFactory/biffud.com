import React, { Component, Fragment } from "react";

import { Helmet } from "../partials";

export default class LulzLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Not so serious landing page" />
        <h1>Lulz</h1>
      </Fragment>
    );
  }
}

LulzLandingPage.propTypes = {};
