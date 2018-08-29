import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

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
          <Title looks="h1">About the company</Title>
        </Layout>
      </Fragment>
    );
  }
}

AboutTheCompany.propTypes = {};
