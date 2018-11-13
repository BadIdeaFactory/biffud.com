import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Icon } from "ui/components";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { breakpoint, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Projects = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Project = styled(BodyContent)`
  ${setSpace("pan")};
  ${setType("s")};
  grid-row-end: span 1;
  position: relative;
  & > * {
    ${setSpace("pam")};
    background: ${({ theme }) => theme.background};
    display: block;
    height: 100%;
    position: relative;
    transition: background ${time.s};
    &:hover {
      background: white;
    }
  }
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
  ${({ hibernated }) => (hibernated ? `opacity: 0.5` : "")};
  ${({ highlight }) =>
    highlight
      ? `
    grid-column: 1 / span 2;
    grid-row: 1 / 2;
    justify-self: stretch;
    align-self: stretch;
  `
      : ``};
`;

const ProjectCover = styled.div`
  ${setSpace("mbm")};
`;

const ProjectHd = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("l")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 900;
  }
  span {
    display: none;
  }
  ${breakpoint.desktopUp} {
    span {
      display: inline-block;
    }
  }
`;

const ProjectBd = styled.div`
  color: ${({ theme }) => theme.titleColor};
  p.summary {
    ${setSpace("mvs")};
    ${setType("m")};
  }
  p.meta {
    ${setType("x")};
    color: ${({ theme }) => theme.color};
  }
`;

export default class ProjectListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { projects, markdownRemark } = this.props.data;
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
                const {
                  active,
                  cover,
                  date,
                  highlight,
                  tagline,
                  title,
                  uid
                } = node.frontmatter;
                return (
                  <Project
                    key={uid}
                    as="li"
                    highlight={highlight}
                    hibernated={!active}
                  >
                    <Link to={`/projects/${uid}`}>
                      {cover ? (
                        <ProjectCover>
                          <Img
                            fluid={cover.childImageSharp.fluid}
                            alt={title}
                          />
                        </ProjectCover>
                      ) : null}
                      <ProjectHd>
                        <h2 className="title">{title}</h2>
                        <span>
                          <Icon name="arrow-right" text="Read more…" />
                        </span>
                      </ProjectHd>
                      <ProjectBd>
                        <p className="summary">{tagline}</p>
                        <p className="meta">
                          <span>{date}</span>
                        </p>
                      </ProjectBd>
                    </Link>
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
    projects: object.isRequired,
    markdownRemark: object.isRequired
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
            active
            tagline
            highlight
            cover {
              childImageSharp {
                fluid(
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  maxWidth: 600
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
