import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { Helmet } from "ui/partials";

const ListingItem = styled.div`
  max-width: 300px;
  float: left;
`;

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const works = data.allMarkdownRemark.edges;
    const prefix = data.site.siteMetadata.paths.projects;
    return (
      <Fragment>
        <Helmet {...this.props} title="Our projects" />
        <h1>All Works</h1>
        {works.map(({ node }) => {
          const { id, frontmatter } = node;
          const { cover, date, title, uid } = frontmatter;
          return (
            <ListingItem key={id}>
              <Link to={`/${prefix}/${uid}`}>
                <Img fluid={cover.childImageSharp.fluid} alt={title} />
              </Link>
              <Link to={`/${prefix}/${uid}`}>
                <h2>{title}</h2>
              </Link>
              <span>{date}</span>
            </ListingItem>
          );
        })}
      </Fragment>
    );
  }
}

WorksPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllWorksQuery {
    site {
      siteMetadata {
        paths {
          projects
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/projects/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            date(formatString: "MMMM YYYY")
            title
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 400
                  maxHeight: 300
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
    }
  }
`;
