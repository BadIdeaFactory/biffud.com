import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { Helmet, Layout } from "ui/partials";

const ListingItem = styled.div`
  max-width: 300px;
  float: left;
`;

export default class ProjectsListingPage extends Component {
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
        <Layout {...this.props}>
          <h1>All Works</h1>
          {works.map(({ node }) => {
            const { id, frontmatter } = node;
            const { cover, date, title, uid } = frontmatter;
            return (
              <ListingItem key={id}>
                <Action to={`/${prefix}/${uid}`}>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Action>
                <Action to={`/${prefix}/${uid}`}>
                  <h2>{title}</h2>
                </Action>
                <span>{date}</span>
              </ListingItem>
            );
          })}
        </Layout>
      </Fragment>
    );
  }
}

ProjectsListingPage.propTypes = {
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
