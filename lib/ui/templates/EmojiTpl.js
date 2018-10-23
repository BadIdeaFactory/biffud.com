import React, { Component } from "react";

import { Body, Header, Helmet, Layout } from "ui/partials";

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
          <Header>
            <h1>Emoji page</h1>
          </Header>
          <Body>Body</Body>
        </Layout>
      </>
    );
  }
}

EmojiTpl.propTypes = {};
