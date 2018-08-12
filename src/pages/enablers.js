import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class ClientsAndPartnershipsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Clients and partners" />
        <h1>Clients and partners page</h1>
      </Fragment>
    );
  }
}

ClientsAndPartnershipsPage.propTypes = {};
