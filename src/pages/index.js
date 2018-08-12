import { Link } from "gatsby";
import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";
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
        <header>
          <h1>Bad Idea Factory</h1>
        </header>
        <h2>Hello, sheep</h2>
        <nav>
          <ul>
            <li>
              <Link to={paths.tldr}>Blog</Link>
            </li>
            <li>
              <Link to={paths.projects}>Portfolololio</Link>
            </li>
            <li>
              <Link to={paths.fame}>Mentions</Link>
            </li>
            <li>
              <Link to={paths.people}>Members</Link>
            </li>
            <li>
              <Link to={paths.faq}>FAQ</Link>
            </li>
            <li>
              <Link to={paths.emoji}>Emoji of the Month</Link>
            </li>
            <li>
              <Link to={paths.wat}>About the company</Link>
            </li>
            <li>
              <Link to={paths.srsbusiness}>Serious landing</Link>
            </li>
            <li>
              <Link to={paths.business}>BIFFUD landing</Link>
            </li>
            <li>
              <Link to={paths.corporate}>Slack</Link>
            </li>
            <li>
              <Link to={paths.evilPlan}>Evil plan</Link>
            </li>
            <li>
              <Link to={paths.goodPlan}>Good plan</Link>
            </li>
            <li>
              <Link to={paths.neutralPlan}>Neutral plan</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
