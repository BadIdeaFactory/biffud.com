import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Action, Subtitle, Title } from "ui/components";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <header>
            <Title looks="h1">Bad Idea Factory</Title>
          </header>
          <Subtitle looks="h2">Hello, sheep</Subtitle>
          <nav>
            <ul>
              <li>
                <Action to="/tldr/">Blog</Action>
              </li>
              <li>
                <Action to="/projects/">Portfolololio</Action>
              </li>
              <li>
                <Action to="/fame/">Mentions</Action>
              </li>
              <li>
                <Action to="/people/">Members</Action>
              </li>
              <li>
                <Action to="/question/">FAQ</Action>
              </li>
              <li>
                <Action to="/eotm/">Emoji of the Month</Action>
              </li>
              <li>
                <Action to="/wat/">About the company</Action>
              </li>
              <li>
                <Action to="/srsbusiness/">Serious landing</Action>
              </li>
              <li>
                <Action to="/business/">BIFFUD landing</Action>
              </li>
              <li>
                <Action to="/corporate/">Slack</Action>
              </li>
            </ul>
          </nav>
        </Layout>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
