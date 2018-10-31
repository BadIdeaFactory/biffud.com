import { Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { breakpoint } from "ui/settings";
import { Body, BodyHead, Header, Helmet, Layout } from "ui/partials";
import { setSpace, setType } from "ui/mixins";

const BlogPostList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const BlogPost = styled.li`
  ${setType("x")};
`;

const BlogPostTitle = styled.h2`
  ${setType("l")};
  color: ${({ theme }) => theme.actionColor};
  font-weight: 700;
`;

const BlogPostExcerpt = styled.p`
  ${setType("s")};
  ${setSpace("mvs")};
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
            <BlogPostList>
              {posts.map(({ node }) => {
                const { id, excerpt, frontmatter } = node;
                const { date, title, uid } = frontmatter;
                return (
                  <BlogPost>
                    <Link to={`/tldr/${uid}`}>
                      <BlogPostTitle>{title}</BlogPostTitle>
                    </Link>
                    <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
                    <Action to={`/tldr/${uid}`}>Read more</Action>
                  </BlogPost>
                );
              })}
            </BlogPostList>
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
