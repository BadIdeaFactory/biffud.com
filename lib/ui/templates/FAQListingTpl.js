import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { Helmet, Layout } from "ui/partials";

export default class FAQListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const membershipQuestions = this.props.data.membership.edges;
    const partnershipQuestions = this.props.data.partnership.edges;
    return (
      <Fragment>
        <Helmet {...this.props} title="Frequently Asked Questions" />
        <Layout {...this.props}>
          <h1>FAQs</h1>
          <h2>Apply to join</h2>
          {membershipQuestions.map(({ node }) => {
            const { frontmatter, html, id } = node;
            const { question } = frontmatter;
            return (
              <Fragment key={id}>
                <h3>{question}</h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Fragment>
            );
          })}
          <h2>Submit a project proposal</h2>
          {partnershipQuestions.map(({ node }) => {
            const { frontmatter, html, id } = node;
            const { question } = frontmatter;
            return (
              <Fragment key={id}>
                <h3>{question}</h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Fragment>
            );
          })}
        </Layout>
      </Fragment>
    );
  }
}

FAQListingTpl.propTypes = {
  data: shape({
    membership: object.isRequired,
    partnership: object.isRequired
  }).isRequired
};
