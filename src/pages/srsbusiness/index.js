import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

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
          <Title looks="h1">Serious landing page</Title>
        </Layout>
      </Fragment>
    );
  }
}

SeriousLandingPage.propTypes = {};
