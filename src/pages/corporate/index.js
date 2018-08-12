import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class SlackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Slack" />
        <Layout {...this.props}>
          <h1>Slack page</h1>
        </Layout>
      </Fragment>
    );
  }
}

SlackPage.propTypes = {};
