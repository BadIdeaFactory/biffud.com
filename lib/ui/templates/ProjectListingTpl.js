import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const Projects = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Project = styled(BodyContent)`
  ${setSpace("pam")};
  &:nth-child(even) {
    ${setSpace("mtl")};
  }
`;

const ProjectDetails = styled.div``;

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
            <Projects>
              {projects.edges.map(({ node }) => {
                const { cover, date, tagline, title, uid } = node.frontmatter;
                return (
                  <Project key={uid}>
                    <Link to={`/projects/${uid}`} style={{ display: "block" }}>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Link>
                    <ProjectDetails>
                      <h2>
                        <Action to={`/projects/${uid}`}>{title}</Action>
                      </h2>
                      <span>{tagline}</span>
                      <span>{date}</span>
                    </ProjectDetails>
                  </Project>
                );
              })}
            </Projects>
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
                  maxWidth: 600
                  quality: 100
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
