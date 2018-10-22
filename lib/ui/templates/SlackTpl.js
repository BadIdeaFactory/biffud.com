import React, { Component } from "react";

import { Body, Fold, Helmet, Layout } from "ui/partials";

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
          <Fold>
            <h1>Slack Page</h1>
          </Fold>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

SlackTpl.propTypes = {};
