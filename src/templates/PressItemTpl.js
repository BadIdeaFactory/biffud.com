import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class MentionTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const post = this.props.data.markdownRemark;
    return (
      <Fragment>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Fragment>
    );
  }
}

MentionTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query PressItemsByUID($uid: String!) {
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
