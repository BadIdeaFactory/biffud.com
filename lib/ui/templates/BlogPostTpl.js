import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";

import { Layout, Helmet } from "ui/partials";

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
          <h1 looks="h1">{title}</h1>
          <p>{date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
