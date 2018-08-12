import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class EmojiOfTheMonthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Emoji Of The Month" />
        <h1>Emoji Of The Month</h1>
      </Fragment>
    );
  }
}

EmojiOfTheMonthPage.propTypes = {};
