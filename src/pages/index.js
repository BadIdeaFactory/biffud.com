import { Link } from "gatsby";
import React, { Component, Fragment } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Bad Idea Factory</h1>
        </header>
        <h2>Hello, sheep</h2>
        <Link to="/posts/">Read blog posts</Link>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
