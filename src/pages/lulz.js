import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class LulzLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SEOWrapper />
        <h1>Lulz</h1>
      </Fragment>
    );
  }
}

LulzLandingPage.propTypes = {};
