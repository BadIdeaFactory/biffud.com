import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class AboutTheCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="About the company" />
        <h1>About the company</h1>
      </Fragment>
    );
  }
}

AboutTheCompany.propTypes = {};
