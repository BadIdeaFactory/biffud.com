import { Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";

import { Helmet, Layout } from "ui/partials";

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
          <h1>All Posts</h1>
          {posts.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { date, title, uid } = frontmatter;
            return (
              <>
                <Link to={`/tldr/${uid}`}>
                  <h2>{title}</h2>
                </Link>
                <span>{date}</span>
                <p>{excerpt}</p>
              </>
            );
          })}
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
