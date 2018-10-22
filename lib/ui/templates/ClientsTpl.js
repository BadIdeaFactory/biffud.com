import React, { Component } from "react";

import { Body, Fold, Helmet, Layout } from "ui/partials";

export default class ClientsTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Clients " />
        <Layout {...this.props}>
          <Fold>
            <h1>Clients</h1>
          </Fold>
          <Body>Some body</Body>
        </Layout>
      </>
    );
  }
}

ClientsTpl.propTypes = {};
