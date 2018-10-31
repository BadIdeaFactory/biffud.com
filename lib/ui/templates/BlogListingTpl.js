import { Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import {} from "ui/components";
import { breakpoint, color } from "ui/settings";
import {
  Body,
  BodyContent,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";
import { setSpace, setType } from "ui/mixins";

const BlogPostList = styled.ol`
  ${breakpoint.tabletUp} {
  }
`;

const BlogPost = styled.li`
  ${setType("x")};
  ${setSpace("pvm")};
  border-bottom: 1px solid ${color.shadowWt};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BlogPostTitle = styled.h2`
  ${setType("l")};
  color: ${({ theme }) => theme.actionColor};
  font-weight: 900;
`;
const BlogPostDate = styled.p`
  color: ${({ theme }) => theme.color};
  flex: 0 0 90px;
  text-align: right;
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
              <BlogPostList>
                {posts.map(({ node }) => {
                  const { id, frontmatter } = node;
                  const { date, title, uid } = frontmatter;
                  return (
                    <Link to={`/tldr/${uid}`}>
                      <BlogPost>
                        <BlogPostTitle>{title}</BlogPostTitle>
                        <BlogPostDate>{date}</BlogPostDate>
                      </BlogPost>
                    </Link>
                  );
                })}
              </BlogPostList>
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
