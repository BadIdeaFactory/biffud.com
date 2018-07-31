import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class PortfolioItemTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const portfolioItem = this.props.data.markdownRemark;
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>{portfolioItem.frontmatter.title}</h1>
        <p>{portfolioItem.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: portfolioItem.html }} />
      </Fragment>
    );
  }
}

PortfolioItemTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query PortfolioItemsByUID($uid: String!) {
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
