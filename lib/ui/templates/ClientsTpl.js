import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

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
          <Header>
            <h1>Clients</h1>
          </Header>
          <Body>Some body</Body>
        </Layout>
      </>
    );
  }
}

ClientsTpl.propTypes = {};
