import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class SeriousLandingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Serious landing page" />
        <Layout {...this.props}>
          <h1>Serious landing page</h1>
        </Layout>
      </>
    );
  }
}

SeriousLandingTpl.propTypes = {};
