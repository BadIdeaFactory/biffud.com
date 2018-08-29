import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

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
          <Title looks="h1">Slack page</Title>
        </Layout>
      </Fragment>
    );
  }
}

SlackPage.propTypes = {};
