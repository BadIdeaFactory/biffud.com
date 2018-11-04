import { Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { Icon } from "ui/components";
import { breakpoint, time } from "ui/settings";
import {
  Body,
  BodyContent,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";
import { setSpace, setType, setWidth } from "ui/mixins";

const PostList = styled.ol``;

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
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <>
        <Helmet {...this.props} title="Blog" />
        <Layout {...this.props}>
          <Header>
            <h1>Blog</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>Recent posts</h1>
            </BodyHead>
            <BodyContent limit>
              <PostList>
                {posts.map(({ node }) => {
                  const { id, frontmatter, timeToRead } = node;
                  const { cover, date, summary, title, uid } = frontmatter;
                  return (
                    <Post>
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
    allMarkdownRemark: object.isRequired
  }).isRequired
};
