import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
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
            <span className="small">{frontmatter.title}</span>
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body>
            <BodyContent>
              {projects.edges.map(({ node }) => {
                const { cover, date, tagline, title, uid } = node.frontmatter;
                return (
                  <ListingItem key={uid}>
                    <ProjectCover>
                      <Link
                        to={`/projects/${uid}`}
                        style={{ display: "block" }}
                      >
                        <Img fluid={cover.childImageSharp.fluid} alt={title} />
                      </Link>
                    </ProjectCover>
                    <ProjectDetails>
                      <h2>
                        <Action to={`/projects/${uid}`}>{title}</Action>
                      </h2>
                      <span>{tagline}</span>
                      <span>{date}</span>
                    </ProjectDetails>
                  </ListingItem>
                );
              })}
            </BodyContent>
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
            tagline
            cover {
              childImageSharp {
                fluid(
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
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
