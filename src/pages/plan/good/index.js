import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class GoodPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Good Plan Page" />
        <h1>Good Plan Page</h1>
      </Fragment>
    );
  }
}

GoodPlanPage.propTypes = {};
