import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

export default class ContactTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <Header>
            <h1>Contact</h1>
          </Header>
          <Body>Some content</Body>
        </Layout>
      </>
    );
  }
}

ContactTpl.propTypes = {};
