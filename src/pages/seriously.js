import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class SeriousLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>Serious landing page</h1>
      </Fragment>
    );
  }
}

SeriousLandingPage.propTypes = {};
