import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { breakpoint, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { Copy } from "ui/components";

const MentionsList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Mention = styled(BodyContent)`
  ${setType("s")};
  grid-row-end: span 1;
  position: relative;
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
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
`;

export default class MediaTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mentions } = this.props.data;
    const { frontmatter } = this.props.data.markdownRemark;
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
            <MentionsList>
              {mentions.edges.map(({ node }) => {
                const { html } = node;
                const {
                  cover,
                  date,
                  link,
                  project,
                  publication,
                  source,
                  title
                } = node.frontmatter;
                return (
                  <Mention as="li">
                    <div>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                      <h2>{title}</h2>
                      <Copy dangerouslySetInnerHTML={{ __html: html }} />
                      <span>{date}</span>
                      <span>Publication: {publication}</span>
                      <span>Project: {project}</span>
                      <a href={link}>Link</a>
                      <a href={source}>Source</a>
                    </div>
                  </Mention>
                );
              })}
            </MentionsList>
          </Body>
        </Layout>
      </>
    );
  }
}

MediaTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired,
    mentions: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query MediaTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
      }
    }
    mentions: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/fame/.*mention.md/" } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___score] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            cover {
              childImageSharp {
                fluid(
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  maxHeight: 240
                  quality: 100
                  traceSVG: { color: "lightgray" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            link
            project
            publication
            source
            uid
          }
        }
      }
    }
  }
`;
