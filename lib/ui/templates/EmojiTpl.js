import React, { Component } from "react";

import { Body, Fold, Helmet, Layout } from "ui/partials";

export default class EmojiTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Emoji page" />
        <Layout {...this.props}>
          <Fold>
            <h1>Emoji page</h1>
          </Fold>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

EmojiTpl.propTypes = {};
