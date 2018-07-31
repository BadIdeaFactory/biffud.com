import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { Helmet } from "../partials";

export default class PortfolioItemTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const portfolioItem = this.props.data.markdownRemark;
    const { frontmatter, html } = portfolioItem;
    const { date, title } = frontmatter;
    return (
      <Fragment>
        <Helmet {...this.props} title={title} />
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
