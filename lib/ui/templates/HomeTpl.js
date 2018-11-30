import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Icon } from "ui/components";
import { Helmet, Layout, Pitch } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, track, time } from "ui/settings";

import Clients from "./ofHome/Clients";
import Projects from "./ofHome/Projects";
import Services from "./ofHome/Services";

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

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    const { clients, projects, defaultCover } = this.props.data;
    // const genericCover = defaultCover.edges[0].node.childImageSharp;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1 className="hero">{frontmatter.heading}</h1>
          </Pitch>
          <Projects
            title={frontmatter.projectsTitle}
            subtitle={frontmatter.projectsSubtitle}
            projects={projects.edges}
          />
          <Services
            title={frontmatter.servicesTitle}
            subtitle={frontmatter.servicesSubtitle}
            services={frontmatter.services}
          />
          <Services
            title={frontmatter.goodatTitle}
            subtitle={frontmatter.goodatSubtitle}
            services={frontmatter.goodat}
          />
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
        servicesSubtitle
        services {
          title
          text
        }
        goodatTitle
        goodatSubtitle
        goodat {
          title
          text
        }
        clientsSubtitle
        clientsTitle
        projectsSubtitle
        projectsTitle
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
