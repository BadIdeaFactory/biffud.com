import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class ClientsAndPartnershipsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Clients and partners" />
        <Layout {...this.props}>
          <h1>Clients and partners page</h1>
        </Layout>
      </Fragment>
    );
  }
}

ClientsAndPartnershipsPage.propTypes = {};
