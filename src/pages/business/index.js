import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class BIFLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Not so serious landing page" />
        <Layout {...this.props}>
          <h1>Biffud landing</h1>
        </Layout>
      </Fragment>
    );
  }
}

BIFLandingPage.propTypes = {};
