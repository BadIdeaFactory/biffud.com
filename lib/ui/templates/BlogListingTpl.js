import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { Icon } from "ui/components";
import { breakpoint, time } from "ui/settings";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { setSpace, setType, setWidth } from "ui/mixins";

const PostList = styled.ol`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`;

const Post = styled.li`
  position: relative;
  &:not(:last-child) {
    ${setSpace("mbh")};
  }
  ${breakpoint.desktopUp} {
    ${setSpace("mbn")};
    ${setSpace("mth")};
    &:not(:first-child) {
      ${setSpace("mtk")};
    }
  }
`;

const PostCover = styled.div`
  ${setSpace("mbm")};
  ${breakpoint.desktopUp} {
    ${setSpace("mbn")};
    ${setWidth("k")};
    position: absolute;
    top: -3em;
    left: -5em;
    z-index: 0;
  }
`;

const PostSauce = styled.div`
  background: white;
  position: relative;
  transition: box-shadow ${time.s}, transform ${time.s};
  z-index: 1;
  ${breakpoint.phone} {
    ${setSpace("mtm")};
  }
  ${breakpoint.desktopUp} {
    ${setSpace("plm")};
    ${setSpace("prm")};
    ${setSpace("pvs")};
    &:hover {
      box-shadow: 3px 3px 0 0 ${({ theme }) => theme.decor};
      transform: translateX(-1px) translateY(-1px);
    }
  }
`;

const PostHd = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    ${setType("l")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 900;
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
  color: ${({ theme }) => theme.titleColor};
  p.summary {
    ${setSpace("mvs")};
    ${setType("m")};
  }
  p.meta {
    ${setType("x")};
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
            <BodyContent limit>
              <PostList>
                {posts.edges.map(({ node }) => {
                  const { timeToRead } = node;
                  const { cover, date, summary, title, uid } = node.frontmatter;
                  return (
                    <Post key={uid}>
                      <Link to={`/tldr/${uid}`}>
                        {cover ? (
                          <PostCover>
                            <Img
                              fluid={cover.childImageSharp.fluid}
                              alt={title}
                            />
                          </PostCover>
                        ) : null}
                        <PostSauce>
                          <PostHd>
                            <h2 className="title">{title}</h2>
                            <span>
                              <Icon name="arrow-right" text="Read more…" />
                            </span>
                          </PostHd>
                          <PostBd>
                            <p className="summary">{summary}</p>
                            <p className="meta">
                              <span>{date}</span> ⋅{" "}
                              <span>{timeToRead} min read</span>
                            </p>
                          </PostBd>
                        </PostSauce>
                      </Link>
                    </Post>
                  );
                })}
              </PostList>
            </BodyContent>
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
                  maxWidth: 300
                  quality: 90
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
