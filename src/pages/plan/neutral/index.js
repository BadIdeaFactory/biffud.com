import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class NeutralPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Neutral Plan Page" />
        <Layout {...this.props}>
          <h1>Neutral Plan Page</h1>
        </Layout>
      </Fragment>
    );
  }
}

NeutralPlanPage.propTypes = {};
