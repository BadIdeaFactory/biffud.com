import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Tile } from "ui/components";

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    const readingTime = Math.random() * 300;
    if (typeof window !== "undefined") {
      this.tick = this.tick.bind(this);
      //setInterval(this.tick, 3000);
      // Note the above line was removed because it was causing
      // the page to flash every 3 seconds.
      // See https://github.com/BadIdeaFactory/biffud.com/issues/99
      // for further details.
    }
    this.state = {
      readingTime
    };
  }

  tick() {
    this.setState(prevState => ({
      readingTime: prevState.readingTime + Math.random() * 15 - 4
    }));
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
            <span className="small">
              Reading Time: {this.state.readingTime.toFixed(2)} seconds
            </span>
            <h1 className="hero">{title}</h1>
            <span className="small">{date}</span>
          </Header>
          <Body
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "900px"
            }}
          >
            {cover ? (
              <Img fluid={cover.childImageSharp.fluid} alt={title} />
            ) : null}
            <Tile space="h">
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </Tile>
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
