import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class LandingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Landing page" />
        <Layout {...this.props}>
          <h1>Landing page</h1>
        </Layout>
      </Fragment>
    );
  }
}

LandingTpl.propTypes = {};
