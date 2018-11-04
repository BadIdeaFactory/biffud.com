import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { setSpace } from "ui/mixins";

const ListingItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:not(:first-child) {
    ${setSpace("mth")};
  }
`;

const ProjectCover = styled.div`
  flex: 0 0 ${(100 / 3) * 2}%;
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const ProjectDetails = styled.div`
  flex: 0 0 ${100 / 3}%;
`;

export default class ProjectListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { markdownRemark, projects } = this.props.data;
    const { frontmatter } = markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Header>
            <h1>{frontmatter.title}</h1>
          </Header>
          <Body>
            {projects.edges.map(({ node }) => {
              const { cover, date, title, uid } = node.frontmatter;
              return (
                <ListingItem key={uid}>
                  <ProjectCover>
                    <Action
                      to={`/projects/${uid}`}
                      style={{ display: "block" }}
                    >
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Action>
                  </ProjectCover>
                  <ProjectDetails>
                    <h2>
                      <Action to={`/projects/${uid}`}>{title}</Action>
                    </h2>
                    <span>{date}</span>
                  </ProjectDetails>
                </ListingItem>
              );
            })}
          </Body>
        </Layout>
      </>
    );
  }
}

ProjectListingTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired,
    projects: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query ProjectsTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
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
