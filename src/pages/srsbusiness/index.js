import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class SeriousLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Serious Landing Page" />
        <Layout {...this.props}>
          <h1>Serious landing page</h1>
        </Layout>
      </Fragment>
    );
  }
}

SeriousLandingPage.propTypes = {};
