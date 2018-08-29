import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Subtitle } from "ui/components";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <Subtitle>Hello, sheep</Subtitle>
        </Layout>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
