import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Icon } from "ui/components";
import { Body, BodyContent, Helmet, Layout, Pitch } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, track, time } from "ui/settings";

import Clients from "./ofHome/Clients";

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
    padding: 2px;
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
    .Element {
      display: flex;
      & > * {
        flex: 0 0 ${100 / 3}%;
      }
    }
  }
`;

const ProjectCover = styled.div`
  ${setSpace("mbm")};
  background: ${({ theme }) => theme.actionColor};
  position: relative;
`;

const ProjectBd = styled.div`
  ${setSpace("phm")};
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("m")};
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
  ${setSpace("phm")};
  ${setSpace("pbm")};
  color: ${({ theme }) => theme.titleColor};
  p.summary {
    ${setSpace("mts")};
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
          </Pitch>
          <Projects
            title={frontmatter.projectsTitle}
            subtitle={frontmatter.projectsIntro}
            projects={projects.edges}
          />
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
          <Clients
            title={frontmatter.clientsTitle}
            subtitle={frontmatter.clientsSubtitle}
            clients={clients.edges}
          />
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
              maxWidth: 800
              maxHeight: 600
              quality: 90
              cropFocus: CENTER
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
                  maxWidth: 800
                  cropFocus: CENTER
                  maxHeight: 600
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
