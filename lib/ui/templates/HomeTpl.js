import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Action, Actionbar, Icon, Tile } from "ui/components";
import { Body, BodyContent, Helmet, Layout, Pitch } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, track, time } from "ui/settings";

const Section = styled.section`
  ${setSpace("mtk")};
`;

const Intro = styled.div`
  ${setSpace("mbh")};
  text-align: center;
  h2 {
    ${setSpace("mbm")};
    ${setSpace("phs")};
    ${setSpace("pvx")};
    ${setType("s")};
    background: white;
    color: ${({ theme }) => theme.background};
    display: inline-block;
    font-weight: 800;
    letter-spacing: ${track.m};
    text-transform: uppercase;
  }
  p {
    ${setType("l")};
    color: white;
  }
`;

const ServicesList = styled.ul`
  color: ${({ theme }) => theme.color};
  ${breakpoint.tabletUp} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Service = styled.li`
  ${setSpace("prl")};
  &:not(:last-child) {
    ${setSpace("mbl")}
  }
  ${breakpoint.tabletUp} {
    flex: 0 0 50%;
  }
  ${breakpoint.desktopUp} {
    flex: 0 0 25%;
  }
  h3 {
    color: ${({ theme }) => theme.color};
    ${setSpace("mbs")};
    ${setType("l")};
    font-weight: 800;
  }
  p {
    color: ${({ theme }) => theme.color};
    font-weight: 300;
  }
`;

const ProjectList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Project = styled(BodyContent)`
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
`;

const ProjectCover = styled.div`
  ${setSpace("mvm")};
  background: ${({ theme }) => theme.actionColor};
  position: relative;
`;

const ProjectHd = styled.div`
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

const Flag = styled.span`
  ${setType("x")};
  ${setSpace("mlx")};
  color: ${({ theme }) => theme.dimmedColor};
  font-weight: 800;
  text-transform: uppercase;
`;

const ClientsSection = styled(Section)`
  ${setSpace("pal")};
  background: white;
  ${Intro} {
    ${setSpace("mbs")};
  }
`;

const ClientsList = styled.ul`
  text-align: center;
  display: block;
  width: 100%;
  li {
    ${setSpace("mhm")};
    display: inline-block;
  }
`;

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    const { clients, projects, defaultCover } = this.props.data;
    const genericCover = defaultCover.edges[0].node.childImageSharp;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1 className="hero">{frontmatter.heading}</h1>
            <Actionbar>
              <Action button to="/projects">
                {frontmatter.projectsCta}
              </Action>
              <Action to="/contact">{frontmatter.contactCta}</Action>
            </Actionbar>
          </Pitch>
          <Section>
            <Intro>
              <h2>{frontmatter.servicesTitle}</h2>
              <p>{frontmatter.servicesIntro}</p>
            </Intro>
            <ServicesList>
              <Service>
                <h3>{frontmatter.service1Title}</h3>
                <p>{frontmatter.service1Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service2Title}</h3>
                <p>{frontmatter.service2Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service3Title}</h3>
                <p>{frontmatter.service3Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service4Title}</h3>
                <p>{frontmatter.service4Text}</p>
              </Service>
            </ServicesList>
          </Section>
          <Section space>
            <Intro>
              <h2>{frontmatter.goodatTitle}</h2>
              <p>{frontmatter.goodatIntro}</p>
            </Intro>
            <ServicesList>
              <Service>
                <h3>{frontmatter.goodat1Title}</h3>
                <p>{frontmatter.goodat1Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat2Title}</h3>
                <p>{frontmatter.goodat2Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat3Title}</h3>
                <p>{frontmatter.goodat3Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat4Title}</h3>
                <p>{frontmatter.goodat4Text}</p>
              </Service>
            </ServicesList>
          </Section>
          <ClientsSection>
            <Intro>
              <h2>{frontmatter.clientsTitle}</h2>
            </Intro>
            <Body>
              <ClientsList>
                {clients.edges.map(({ node }) => {
                  const { link, logo, name } = node.frontmatter;
                  return (
                    <li>
                      <Tile
                        as="a"
                        href={link}
                        target="_blank"
                        hd={
                          <Img fixed={logo.childImageSharp.fixed} alt={name} />
                        }
                        // bd={<h2>{name}</h2>}
                      />
                    </li>
                  );
                })}
              </ClientsList>
            </Body>
          </ClientsSection>
          <Section>
            <Intro>
              <h2>{frontmatter.projectsTitle}</h2>
              <p>{frontmatter.projectsIntro}</p>
            </Intro>
            <Body>
              <ProjectList>
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
              </ProjectList>
            </Body>
          </Section>
        </Layout>
      </>
    );
  }
}

HomeTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query HomeTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        contactCta
        projectsCta
        servicesTitle
        servicesIntro
        service1Title
        service1Text
        service2Title
        service2Text
        service3Title
        service3Text
        service4Title
        service4Text
        goodatTitle
        goodatIntro
        goodat1Title
        goodat1Text
        goodat2Title
        goodat2Text
        goodat3Title
        goodat3Text
        goodat4Title
        goodat4Text
        clientsTitle
        projectsTitle
        projectsIntro
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
    clients: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/clients/.*client.md/" } }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            name
            score
            link
            logo {
              childImageSharp {
                fixed(
                  height: 40
                  quality: 80
                  traceSVG: { color: "lightgray" }
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
      limit: 3
      sort: {
        order: DESC
        fields: [frontmatter___feature, frontmatter___score, frontmatter___date]
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            title
            active
            feature
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
