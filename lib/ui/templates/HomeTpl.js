import React, { Component } from "react";

import { Fold, Helmet, Layout } from "ui/partials";

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <Fold>
            <h1>
              Bad Idea Factory is a collective of chaotic creatives using
              technology to make people thinking face emoji. We have been
              working in this space for hundreds of thousands of years
            </h1>
          </Fold>
        </Layout>
      </>
    );
  }
}

HomeTpl.propTypes = {};
