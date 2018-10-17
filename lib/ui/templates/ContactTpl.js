import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class ContactTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <h1>Contact</h1>
        </Layout>
      </>
    );
  }
}

ContactTpl.propTypes = {};
