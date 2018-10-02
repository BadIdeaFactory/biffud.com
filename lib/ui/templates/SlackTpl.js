import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class SlackTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Helmet {...this.props} title="Slack " />
        <Layout {...this.props}>
          <h1>Slack </h1>
        </Layout>
      </Fragment>
    );
  }
}

SlackTpl.propTypes = {};
