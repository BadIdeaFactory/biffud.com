import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const questions = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <SEOWrapper />
        <h1>All Questions</h1>
        {questions.map(({ node }) => {
          const { frontmatter, html, id } = node;
          const { question } = frontmatter;
          return (
            <Fragment key={id}>
              <h2>{question}</h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

FaqPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllQuestionsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/faq/*/.*/*.md/" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            uid
            question
          }
        }
      }
    }
  }
`;
