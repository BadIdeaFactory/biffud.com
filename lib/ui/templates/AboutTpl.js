import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

export default class AboutTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="About the company" />
        <Layout {...this.props}>
          <Header>
            <h1>About</h1>
          </Header>
          <Body>Some content</Body>
        </Layout>
      </>
    );
  }
}

AboutTpl.propTypes = {};
