import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Icon, Tile } from "ui/components";

const MentionsList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Mention = styled(Tile)`
  ${setType("m")};
  grid-row-end: span 1;
  position: relative;
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
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

const MentionCover = styled.div`
  ${setSpace("mbm")};
  border: 2px solid ${({ theme }) => theme.actionColor};
  display: block;
`;

const MentionHd = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("l")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 800;
  }
`;

const MentionBd = styled.div`
  ${setSpace("mts")};
  color: ${({ theme }) => theme.titleColor};
  ${Copy} {
    ${setSpace("mbs")};
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
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body>
            <MentionsList>
              {mentions.edges.map(({ node }) => {
                const { html } = node;
                const {
                  cover,
                  publication,
                  source,
                  highlight,
                  title
                } = node.frontmatter;
                return (
                  <Mention as="li" highlight={highlight}>
                    <Tile href={source} target="_blank" as="a">
                      {cover ? (
                        <MentionCover>
                          <Img
                            fluid={cover.childImageSharp.fluid}
                            alt={title}
                          />
                        </MentionCover>
                      ) : null}
                      <MentionHd>
                        <h2 className="title">{title}</h2>
                        <span>
                          <Icon name="popout" text="Read the article…" />
                        </span>
                      </MentionHd>
                      <MentionBd>
                        {html ? (
                          <>
                            <Copy dangerouslySetInnerHTML={{ __html: html }} />
                          </>
                        ) : null}
                        <p>by {publication}</p>
                      </MentionBd>
                    </Tile>
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
      sort: { order: DESC, fields: [frontmatter___date] }
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
                  maxHeight: 240
                  quality: 100
                  traceSVG: { color: "lightgray" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            link
            highlight
            publication
            source
            uid
          }
        }
      }
    }
  }
`;
