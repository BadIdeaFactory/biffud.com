import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";

import { Actionbar, Action, Copy } from "ui/components";
import { Body, BodyContent, Pitch, Helmet, Layout } from "ui/partials";

export default class LandingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1 className="hero">{frontmatter.heading}</h1>
            <Actionbar>
              <Action button to="/projects">
                {frontmatter.projectsCta}
              </Action>
              <Action to="/contact">{frontmatter.contactCta}</Action>
            </Actionbar>
          </Pitch>
          <Body>
            <BodyContent limit>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </BodyContent>
          </Body>
        </Layout>
      </>
    );
  }
}

LandingTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query LandingTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        contactCta
        projectsCta
      }
    }
  }
`;
