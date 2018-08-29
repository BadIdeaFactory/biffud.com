import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

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
          <Title looks="h1">Biffud landing</Title>
        </Layout>
      </Fragment>
    );
  }
}

BIFLandingPage.propTypes = {};
