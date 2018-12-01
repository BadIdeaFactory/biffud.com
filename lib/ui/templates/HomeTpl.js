import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";

import { Action, Actionbar } from "ui/components";
import { Helmet, Layout, Pitch } from "ui/partials";

import Clients from "./ofHome/Clients";
import Projects from "./ofHome/Projects";
import Services from "./ofHome/Services";
import Testimonials from "./ofHome/Testimonials";

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const { clients, projects, defaultCover } = this.props.data;
    const genericCover = defaultCover.edges[0].node.childImageSharp;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1 className="hero">{frontmatter.heading}</h1>
            <Actionbar>
              <Action button to="contact">
                Submit an idea
              </Action>
              <Action to="contact">Become a Corporate Overlord</Action>
              <span className="join">or</span>
              <Action to="contact">Give us money</Action>
            </Actionbar>
          </Pitch>
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
          <Projects
            placeholder={genericCover.fluid}
            projects={projects.edges}
            subtitle={frontmatter.projectsSubtitle}
            title={frontmatter.projectsTitle}
          />
          <Clients
            title={frontmatter.clientsTitle}
            subtitle={frontmatter.clientsSubtitle}
            clients={clients.edges}
          />
          <Testimonials
            title={frontmatter.testimonialsTitle}
            subtitle={frontmatter.testimonialsSubtitle}
            testimonials={frontmatter.testimonials}
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
        testimonialsTitle
        testimonialsSubtitle
        testimonials {
          text
          source
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
          html
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
