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
        Sheepswarm Index
        <br />
        <Link to="/posts/">Posts</Link>
      </Fragment>
    );
  }
}

HomePage.propTypes = {};
