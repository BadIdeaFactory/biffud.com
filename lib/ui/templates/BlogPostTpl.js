import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";

import { Copy } from "ui/components";
import {
  Body,
  BodyContent,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const blogPost = this.props.data.markdownRemark;
    const { frontmatter, html } = blogPost;
    const { cover, date, title } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <h1>Blog</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>{title}</h1>
              <p>{date}</p>
            </BodyHead>
            {cover ? (
              <Img fluid={cover.childImageSharp.fluid} alt={title} />
            ) : null}
            <BodyContent limit>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </BodyContent>
          </Body>
        </Layout>
      </>
    );
  }
}

BlogPostTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query BlogPostsByUID($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        date(formatString: "MMMM DD, YYYY")
        title
        cover {
          childImageSharp {
            fluid(
              maxWidth: 800
              quality: 90
              traceSVG: { color: "lightgray" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
