import React from "react";
import { graphql, Link, type PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { Icon, Tile } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Projects = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 40px;
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

const Project = styled.li`
  grid-row-end: span 1;
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
  ${breakpoint.tabletUp} {
    &:nth-child(even) {
      transform: translateY(30px);
    }
  }
`;

interface ProjectCoverProps {
  readonly $hasPlaceholder: boolean;
}

const ProjectCover = styled.div<ProjectCoverProps>`
  ${setSpace("mbm")};
  border: 2px solid ${({ theme }) => theme.actionColor};
  position: relative;
  ${({ $hasPlaceholder, theme }) =>
    $hasPlaceholder
      ? `
  .thinking {
    color: ${theme.actionColor};
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    i {
      font-size: 80px !important;
    }
  }`
      : ``};
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

const ProjectListingTpl = (props: PageProps<Queries.ProjectsTplQuery>) => {
  const { defaultCover, projects, markdownRemark } = props.data;
  const genericCover = defaultCover.edges[0].node.childImageSharp;
  const { frontmatter } = markdownRemark ?? {};

  return (
    <>
      <Helmet {...props} title={frontmatter?.title ?? ""} />
      <Layout {...props}>
        <Header>
          <h1 className="hero">{frontmatter?.heading}</h1>
          <p className="para">{frontmatter?.subheading}</p>
        </Header>
        <Body>
          <Projects>
            {projects.edges.map(({ node }) => {
              const { active, cover, date, code, tagline, title, uid } =
                node.frontmatter ?? {};

              return (
                <Project key={uid} as="li">
                  <Tile as={Link} to={`/projects/${uid}`}>
                    <ProjectHd>
                      <span className="code">
                        {code} {!active ? <Flag>(Hibernated)</Flag> : null}
                      </span>
                      <span className="date">{date}</span>
                    </ProjectHd>
                    <ProjectCover $hasPlaceholder={!cover}>
                      <GatsbyImage
                        image={
                          cover?.childImageSharp?.gatsbyImageData
                            ? cover.childImageSharp.gatsbyImageData
                            : genericCover!.gatsbyImageData
                        }
                        alt={title ?? ""}
                      />
                      {!cover ? (
                        <span className="thinking">
                          <Icon name="thinking" size="h" />
                        </span>
                      ) : null}
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
                  </Tile>
                </Project>
              );
            })}
          </Projects>
        </Body>
      </Layout>
    </>
  );
};

export default ProjectListingTpl;

export const pageQuery = graphql`
  query ProjectsTpl($uid: String!) {
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
            gatsbyImageData(
              width: 600
              quality: 90
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
      sort: [{ frontmatter: { score: DESC } }, { frontmatter: { date: ASC } }]
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
                gatsbyImageData(
                  width: 600
                  quality: 90
                  placeholder: DOMINANT_COLOR
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`;
