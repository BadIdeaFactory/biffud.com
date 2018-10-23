import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

export default class SlackTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Slack " />
        <Layout {...this.props}>
          <Header>
            <h1>Slack Page</h1>
          </Header>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

SlackTpl.propTypes = {};
