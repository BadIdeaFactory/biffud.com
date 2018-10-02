import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class EmojiTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Helmet {...this.props} title="Emoji page" />
        <Layout {...this.props}>
          <h1>Emoji page</h1>
        </Layout>
      </Fragment>
    );
  }
}

EmojiTpl.propTypes = {};
