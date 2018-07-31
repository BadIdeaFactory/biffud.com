import { Link } from "gatsby";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <header>
          <h1>Bad Idea Factory</h1>
        </header>
        <h2>Hello, sheep</h2>
        <nav>
          <ul>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolololio</Link>
            </li>
            <li>
              <Link to="/press/">Mentions</Link>
            </li>
            <li>
              <Link to="/members/">Members</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
