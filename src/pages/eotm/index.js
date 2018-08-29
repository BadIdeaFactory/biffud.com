import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Title } from "ui/components";

export default class EmojiOfTheMonthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Emoji Of The Month" />
        <Layout {...this.props}>
          <Title looks="h1">Emoji Of The Month</Title>
        </Layout>
      </Fragment>
    );
  }
}

EmojiOfTheMonthPage.propTypes = {};
