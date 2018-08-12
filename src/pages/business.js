import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class BIFLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Not so serious landing page" />
        <h1>Biffud landing</h1>
      </Fragment>
    );
  }
}

BIFLandingPage.propTypes = {};
