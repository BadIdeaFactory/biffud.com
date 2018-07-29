import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class MembersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const members = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <h1>All Members</h1>
        {members.map(({ node }) => {
          const { frontmatter } = node;
          const { name, title, twitter } = frontmatter;
          return (
            <Fragment key={node.id}>
              <p>{name}</p>
              <p>{title}</p>
              <p>
                <a
                  href={`https://twitter.com/${twitter}`}
                  rel="external"
                  target="_blank noreferrer nofollow"
                >
                  @{twitter}
                </a>
              </p>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

MembersPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllMembersQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/is/*/.*/member.md/" } }
      sort: { order: DESC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            name
            order
            title
            twitter
          }
        }
      }
    }
  }
`;
