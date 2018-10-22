import React, { Component } from "react";

import { Body, Fold, Helmet, Layout } from "ui/partials";

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
          <Fold>
            <h1>Landing page</h1>
          </Fold>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

LandingTpl.propTypes = {};
