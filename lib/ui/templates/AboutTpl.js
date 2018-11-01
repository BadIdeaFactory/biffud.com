import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";

import { Copy } from "ui/components";
import {
  Body,
  BodyContent,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";

export default class AboutTpl extends Component {
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
          <Header>
            <h1>{frontmatter.title}</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>{frontmatter.heading}</h1>
              <p>{frontmatter.subheading}</p>
            </BodyHead>
            <BodyContent>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </BodyContent>
          </Body>
        </Layout>
      </>
    );
  }
}

AboutTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AboutTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
      }
    }
  }
`;
