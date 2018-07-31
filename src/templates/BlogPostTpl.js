import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class BlogPostTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const blogPost = this.props.data.markdownRemark;
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>{blogPost.frontmatter.title}</h1>
        <p>{blogPost.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: blogPost.html }} />
      </Fragment>
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
