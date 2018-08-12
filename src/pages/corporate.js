import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class SlackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Slack" />
        <h1>Slack page</h1>
      </Fragment>
    );
  }
}

SlackPage.propTypes = {};
