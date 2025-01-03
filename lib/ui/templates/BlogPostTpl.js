import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Tile } from "ui/components";

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    const readingTime = Math.random() * 300;
    if (typeof window !== "undefined") {
      this.tick = this.tick.bind(this);
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
    return <>
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
            <GatsbyImage image={cover.childImageSharp.gatsbyImageData} alt={title} />
          ) : null}
          <Tile space="h">
            <Copy dangerouslySetInnerHTML={{ __html: html }} />
          </Tile>
        </Body>
      </Layout>
    </>;
  }
}

BlogPostTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`query BlogPostsByUID($uid: String!) {
  markdownRemark(frontmatter: {uid: {eq: $uid}}) {
    html
    frontmatter {
      uid
      date(formatString: "MMMM DD, YYYY")
      title
      cover {
        childImageSharp {
          gatsbyImageData(
            width: 900
            quality: 90
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
        }
      }
    }
  }
}`;
