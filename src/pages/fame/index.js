import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component, Fragment } from "react";

import { Helmet } from "ui/partials";

export default class MentionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const mentions = data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <Helmet {...this.props} title="Press coverage" />
        <h1>All Mentions</h1>
        {mentions.map(({ node }) => {
          const { id, frontmatter } = node;
          const {
            headline,
            publication,
            date,
            source,
            link,
            project,
            score,
            cover
          } = frontmatter;
          return (
            <Fragment key={id}>
              <h2>{headline}</h2>
              <span>{date}</span>
              <span>Score: {score}</span>
              <span>Publication: {publication}</span>
              <span>Project: {project}</span>
              <a href={link}>Link</a>
              <a href={source}>Source</a>
              <Img fixed={cover.childImageSharp.fixed} />
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

MentionsPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllMentionsQuery {
    site {
      siteMetadata {
        paths {
          fame
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/fame/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            uid
            headline
            date(formatString: "MMMM YYYY")
            publication
            source
            project
            link
            score
            cover {
              childImageSharp {
                fixed(
                  width: 125
                  height: 125
                  traceSVG: {
                    color: "#0000ff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
