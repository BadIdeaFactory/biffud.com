import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class PressItemTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pressItem = this.props.data.markdownRemark;
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>{pressItem.frontmatter.title}</h1>
        <p>{pressItem.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: pressItem.html }} />
      </Fragment>
    );
  }
}

PressItemTpl.propTypes = {
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
