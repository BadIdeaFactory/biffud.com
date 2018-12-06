import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet {...this.props} title="Error" />
        <Layout {...this.props}>
          <h1>You'd think there would be something more interesting here.</h1>
          <iframe width="1" height="1" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/348238181&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </Layout>
      </Fragment>
    );
  }
}

ErrorPage.propTypes = {};
