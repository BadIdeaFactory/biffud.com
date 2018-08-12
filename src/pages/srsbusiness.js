import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class SeriousLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Serious Landing Page" />
        <h1>Serious landing page</h1>
      </Fragment>
    );
  }
}

SeriousLandingPage.propTypes = {};
