import React, { Component } from "react";

import { Body, Fold, Helmet, Layout } from "ui/partials";

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
          <Fold>
            <h1>Contact</h1>
          </Fold>
          <Body>Some content</Body>
        </Layout>
      </>
    );
  }
}

ContactTpl.propTypes = {};
