import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class EvilPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Evil Plan Page" />
        <h1>Evil Plan Page</h1>
      </Fragment>
    );
  }
}

EvilPlanPage.propTypes = {};
