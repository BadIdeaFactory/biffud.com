import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

export default class MediaTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const mentions = data.allMarkdownRemark.edges;
    return (
      <>
        <Helmet {...this.props} title="Press coverage" />
        <Layout {...this.props}>
          <h1>All Mentions</h1>
          {mentions.map(({ node }) => {
            const { id, frontmatter } = node;
            const {
              headline,
              publication,
              date,
              source,
              link,
              project,
              score,
              cover
            } = frontmatter;
            return (
              <>
                <h2>{headline}</h2>
                <span>{date}</span>
                <span>Score: {score}</span>
                <span>Publication: {publication}</span>
                <span>Project: {project}</span>
                <a href={link}>Link</a>
                <a href={source}>Source</a>
                <Img fixed={cover.childImageSharp.fixed} />
              </>
            );
          })}
        </Layout>
      </>
    );
  }
}

MediaTpl.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};
