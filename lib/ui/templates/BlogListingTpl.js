import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { Icon } from "ui/components";
import { breakpoint, time } from "ui/settings";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { setSpace, setType } from "ui/mixins";

const PostList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Post = styled(BodyContent)`
  ${setType("m")};
  grid-row-end: span 1;
  position: relative;
  ${breakpoint.phone} {
    ${setSpace("mbl")};
  }
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
`;

const PostCover = styled.div`
  ${setSpace("mbm")};
`;

const PostHd = styled.div`
  ${setSpace("mbs")};
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("l")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 900;
    text-transform: uppercase;
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

const PostBd = styled.div`
  ${setSpace("mbm")};
  color: ${({ theme }) => theme.titleColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostFt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    ${setType("s")};
    color: ${({ theme }) => theme.color};
  }
`;

export default class BlogListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { posts } = this.props.data;
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
            <PostList>
              {posts.edges.map(({ node }) => {
                const { timeToRead } = node;
                const { cover, date, summary, title, uid } = node.frontmatter;
                return (
                  <Post key={uid} as="li">
                    <Link to={`/tldr/${uid}`}>
                      {cover ? (
                        <PostCover>
                          <Img
                            fluid={cover.childImageSharp.fluid}
                            alt={title}
                          />
                        </PostCover>
                      ) : null}
                      <PostHd>
                        <h2 className="title">{title}</h2>
                        <span>
                          <Icon name="arrow-right" text="Read more…" />
                        </span>
                      </PostHd>
                      <PostBd>
                        <p className="summary">{summary}</p>
                      </PostBd>
                      <PostFt>
                        <span>{date}</span>
                        <span>{timeToRead} min read</span>
                      </PostFt>
                    </Link>
                  </Post>
                );
              })}
            </PostList>
          </Body>
        </Layout>
      </>
    );
  }
}

BlogListingTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired,
    posts: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query BlogTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
      }
    }
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/tldr/.*post.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            uid
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
            date(formatString: "MMMM D, YYYY")
            summary
            title
          }
        }
      }
    }
  }
`;
