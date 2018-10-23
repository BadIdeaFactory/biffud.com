import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { breakpoint } from "ui/settings";
import { Body, BodyHead, Header, Helmet, Layout } from "ui/partials";
import { setSpace } from "ui/mixins";

const BlogPostList = styled.ol`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const BlogPost = styled.li`
  border: 2px solid white;
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
                    <Action to={`/tldr/${uid}`}>
                      <h2>{title}</h2>
                    </Action>
                    <span>{date}</span>
                    <p>{excerpt}</p>
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
