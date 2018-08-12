import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";
import { Action } from "ui/components";
import paths from "config/paths";

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
            <h1>Bad Idea Factory</h1>
          </header>
          <h2>Hello, sheep</h2>
          <nav>
            <ul>
              <li>
                <Action to={paths.tldr}>Blog</Action>
              </li>
              <li>
                <Action to={paths.projects}>Portfolololio</Action>
              </li>
              <li>
                <Action to={paths.fame}>Mentions</Action>
              </li>
              <li>
                <Action to={paths.people}>Members</Action>
              </li>
              <li>
                <Action to={paths.faq}>FAQ</Action>
              </li>
              <li>
                <Action to={paths.emoji}>Emoji of the Month</Action>
              </li>
              <li>
                <Action to={paths.wat}>About the company</Action>
              </li>
              <li>
                <Action to={paths.srsbusiness}>Serious landing</Action>
              </li>
              <li>
                <Action to={paths.business}>BIFFUD landing</Action>
              </li>
              <li>
                <Action to={paths.corporate}>Slack</Action>
              </li>
              <li>
                <Action to={paths.evilPlan}>Evil plan</Action>
              </li>
              <li>
                <Action to={paths.goodPlan}>Good plan</Action>
              </li>
              <li>
                <Action to={paths.neutralPlan}>Neutral plan</Action>
              </li>
            </ul>
          </nav>
        </Layout>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
