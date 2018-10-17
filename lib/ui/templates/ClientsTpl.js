import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class ClientsTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Helmet {...this.props} title="Clients " />
        <Layout {...this.props}>
          <h1>Clients</h1>
        </Layout>
      </>
    );
  }
}

ClientsTpl.propTypes = {};
