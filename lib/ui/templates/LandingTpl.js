import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class LandingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Landing page" />
        <Layout {...this.props}>
          <h1>Landing page</h1>
        </Layout>
      </>
    );
  }
}

LandingTpl.propTypes = {};
