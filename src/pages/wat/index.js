import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class AboutTheCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="About the company" />
        <Layout {...this.props}>
          <h1>About the company</h1>
        </Layout>
      </Fragment>
    );
  }
}

AboutTheCompany.propTypes = {};
