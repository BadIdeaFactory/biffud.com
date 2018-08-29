import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

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
          <Title looks="h1">Clients and partners page</Title>
        </Layout>
      </Fragment>
    );
  }
}

ClientsAndPartnershipsPage.propTypes = {};
