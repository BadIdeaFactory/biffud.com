import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class AboutTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Helmet {...this.props} title="About the company" />
        <Layout {...this.props}>
          <h1>About the company</h1>
        </Layout>
      </>
    );
  }
}

AboutTpl.propTypes = {};
