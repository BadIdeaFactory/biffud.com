import React from "react";
import { graphql, type PageProps } from "gatsby";

import { Action, Actionbar } from "ui/components";
import { Helmet, Layout, Pitch } from "ui/partials";

import Clients from "./ofHome/Clients";
import Projects from "./ofHome/Projects";
import Services from "./ofHome/Services";
import Testimonials from "./ofHome/Testimonials";

const HomeTpl = (props: PageProps<Queries.HomeTplQuery>) => {
  const { frontmatter } = props.data.markdownRemark ?? {};
  const { clients, projects, defaultCover } = props.data;
  const genericCover = defaultCover.edges[0].node.childImageSharp;

  return (
    <>
      <Helmet {...props} title={frontmatter?.title ?? ""} />
      <Layout {...props}>
        <Pitch>
          <h1 className="hero">{frontmatter?.heading}</h1>
          <Actionbar>
            <Action
              button
              href="https://github.com/BadIdeaFactory/corporate/issues?q=is%3Aissue+is%3Aopen+label%3A%22project+application%22"
              target="_blank"
            >
              Submit an idea
            </Action>
            <Action href="https://patreon.com/biffud" target="_blank">
              Give us money
            </Action>
            <span className="join">or</span>
            <Action to="contact">Engage our services</Action>
          </Actionbar>
        </Pitch>
        <Projects
          placeholder={genericCover?.gatsbyImageData}
          projects={projects.edges}
          subtitle={frontmatter?.projectsSubtitle}
          title={frontmatter?.projectsTitle}
        />
        <Clients
          title={frontmatter?.clientsTitle}
          subtitle={frontmatter?.clientsSubtitle}
          clients={clients.edges}
        />
        <Services
          title={frontmatter?.servicesTitle}
          subtitle={frontmatter?.servicesSubtitle}
          services={frontmatter?.services}
        />
        <Services
          title={frontmatter?.goodatTitle}
          subtitle={frontmatter?.goodatSubtitle}
          services={frontmatter?.goodat}
        />
        <Testimonials
          title={frontmatter?.testimonialsTitle}
          subtitle={frontmatter?.testimonialsSubtitle}
          testimonials={frontmatter?.testimonials}
        />
      </Layout>
    </>
  );
};

export default HomeTpl;

export const pageQuery = graphql`
  query HomeTpl($uid: String!) {
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
          span
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
            gatsbyImageData(
              width: 800
              height: 600
              quality: 90
              placeholder: DOMINANT_COLOR
              transformOptions: { cropFocus: CENTER }
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    clients: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/clients/.*client.md/" } }
      sort: { frontmatter: { score: DESC } }
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
                gatsbyImageData(
                  height: 40
                  quality: 80
                  placeholder: DOMINANT_COLOR
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
      limit: 3
      sort: [
        { frontmatter: { feature: DESC } }
        { frontmatter: { score: ASC } }
        { frontmatter: { date: ASC } }
      ]
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
                gatsbyImageData(
                  width: 800
                  height: 600
                  quality: 90
                  placeholder: DOMINANT_COLOR
                  transformOptions: { cropFocus: CENTER }
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
