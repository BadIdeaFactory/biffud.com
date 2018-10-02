import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

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
          <h1>Hello, sheep</h1>
        </Layout>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
