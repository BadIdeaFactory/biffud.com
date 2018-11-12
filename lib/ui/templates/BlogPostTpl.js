import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";

import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { Copy } from "ui/components";

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const blogPost = this.props.data.markdownRemark;
    const { frontmatter, html } = blogPost;
    const { cover, date, title } = frontmatter;
    const readingTime = Math.round(Math.random() * 30000) / 100
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <span className="small">Reading Time: {readingTime} seconds</span>
            <h1 className="hero">{title}</h1>
            <span className="small">{date}</span>
          </Header>
          <Body>
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
