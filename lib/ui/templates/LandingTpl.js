import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

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
          <Header>
            <h1>Landing page</h1>
          </Header>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

LandingTpl.propTypes = {};
