import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Icon } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { breakpoint, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Projects = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
  ${breakpoint.desktopUp} {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
`;

const Flag = styled.span`
  ${setType("x")};
  ${setSpace("mlx")};
  color: ${({ theme }) => theme.dimmedColor};
  font-weight: 800;
  text-transform: uppercase;
`;

const Project = styled(Body)`
  ${setType("m")};
  ${setSpace("pan")};
  grid-row-end: span 1;
  position: relative;
  & > * {
    ${setSpace("pal")};
    background: ${({ theme }) => theme.background};
    display: block;
    height: 100%;
    position: relative;
    transition: box-shadow ${time.s}, transform ${time.s};
    &:hover {
      box-shadow: 6px 6px 0 0 ${({ theme }) => theme.actionDecor};
      transform: translate(-1px, -1px);
    }
  }
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
  ${breakpoint.tabletUp} {
    &:nth-child(even) {
      transform: translateY(30px);
    }
  }
`;

const ProjectCover = styled.div`
  ${setSpace("mbm")};
  background: ${({ theme }) => theme.actionColor};
  position: relative;
`;

const ProjectHd = styled.div`
  ${setSpace("mbm")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-weight: 800;
    text-transform: uppercase;
  }
  span.code {
    align-items: center;
    color: ${({ theme }) => theme.titleColor};
    display: flex;
  }
  span.date {
    color: ${({ theme }) => theme.dimmedColor};
  }
`;

const ProjectBd = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("l")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 800;
    text-transform: uppercase;
  }
  h2 {
    max-width: 75%;
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

const ProjectFt = styled.div`
  color: ${({ theme }) => theme.titleColor};
  p.summary {
    ${setSpace("mts")};
  }
`;

export default class ProjectListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { defaultCover, projects, markdownRemark } = this.props.data;
    const genericCover = defaultCover.edges[0].node.childImageSharp;
    const { frontmatter } = markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Header>
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
                  code,
                  tagline,
                  title,
                  uid
                } = node.frontmatter;
                return (
                  <Project key={uid} as="li">
                    <Link to={`/projects/${uid}`}>
                      <ProjectHd>
                        <span className="code">
                          {code} {!active ? <Flag>(Hibernated)</Flag> : null}
                        </span>
                        <span className="date">{date}</span>
                      </ProjectHd>
                      <ProjectCover>
                        <Img
                          fluid={
                            cover
                              ? cover.childImageSharp.fluid
                              : genericCover.fluid
                          }
                          alt={title}
                        />
                      </ProjectCover>
                      <ProjectBd>
                        <h2 className="title">{title}</h2>
                        <span>
                          <Icon name="arrow-right" text="Read more…" />
                        </span>
                      </ProjectBd>
                      <ProjectFt>
                        <p className="summary">{tagline}</p>
                      </ProjectFt>
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
    defaultCover: allFile(
      filter: { relativePath: { eq: "images/default-cover.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
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
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
      sort: { order: DESC, fields: [frontmatter___score, frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            date(formatString: "MMM YYYY")
            title
            active
            tagline
            code
            cover {
              childImageSharp {
                fluid(
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
