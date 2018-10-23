import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Copy } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";

const BodyContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const blogPost = this.props.data.markdownRemark;
    const { frontmatter, html } = blogPost;
    const { date, title } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <h1>Blog</h1>
          </Header>
          <Body>
            <BodyContent>
              <h1>{title}</h1>
              <p>{date}</p>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </BodyContent>
          </Body>
        </Layout>
      </>
    );
  }
}

BlogPostTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query BlogPostsByUID($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
