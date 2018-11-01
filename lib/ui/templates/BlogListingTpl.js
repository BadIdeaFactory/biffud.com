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
  BodyFoot,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";
import { setHeight, setSpace, setType, setWidth } from "ui/mixins";

const PostList = styled.ol``;

const Post = styled.li`
  ${setSpace("mvh")};
  color: ${({ theme }) => theme.titleColor};
  position: relative;
  transition: background ${time.l};
  ${breakpoint.desktopUp} {
    &:hover {
      background: white;
    }
  }
`;

const PostCover = styled.div`
  ${breakpoint.tabletUp} {
    ${setHeight("l")};
    ${setWidth("k")};
    position: absolute;
    right: 98%;
    z-index: 0;
    & > * {
      transform: translateY(-10%);
    }
  }
`;

const PostSauce = styled.div`
  ${breakpoint.tabletUp} {
    ${setSpace("pll")};
    ${setSpace("prm")};
    ${setSpace("pvs")};
    position: relative;
    border-left: 5px solid ${({ theme }) => theme.decor};
  }
  ${breakpoint.phone} {
    ${setSpace("mtm")};
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
  ${breakpoint.tabletUp} {
    span {
      display: inline-block;
    }
  }
`;

const PostBd = styled.div`
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
            <BodyContent>
              <PostList>
                {posts.map(({ node }) => {
                  const { id, frontmatter, timeToRead } = node;
                  const { cover, date, summary, title, uid } = frontmatter;
                  return (
                    <Link to={`/tldr/${uid}`}>
                      <Post>
                        <PostCover>
                          <Img
                            fluid={cover.childImageSharp.fluid}
                            alt={title}
                          />
                        </PostCover>
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
                      </Post>
                    </Link>
                  );
                })}
              </PostList>
            </BodyContent>
            <BodyFoot />
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
