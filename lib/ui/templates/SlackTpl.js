import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class SlackTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Helmet {...this.props} title="Slack " />
        <Layout {...this.props}>
          <h1>Slack </h1>
        </Layout>
      </>
    );
  }
}

SlackTpl.propTypes = {};
