import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Error" />
        <Layout {...this.props}>
          <h1>You would think there would be something more interesting here.</h1>
        </Layout>
      </Fragment>
    );
  }
}

ErrorPage.propTypes = {};
