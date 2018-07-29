import { Link } from "gatsby";
import React, { Component, Fragment } from "react";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <h1>Posts</h1>
        {posts.map(({ node }) => {
          console.log({ node });
          return (
            <Link to={node.frontmatter.path} key={node.id}>
              {node.frontmatter.title}
            </Link>
          );
        })}
      </Fragment>
    );
  }
}

BlogPage.propTypes = {};

export const pageQuery = graphql`
  query AllPostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/posts/*/.*/post.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            path
          }
        }
      }
    }
  }
`;
