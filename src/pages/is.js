import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";
import Img from "gatsby-image";

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
          const { bio, fname, lname, title, twitter, avatar } = frontmatter;
          return (
            <Fragment key={node.id}>
              <h2>
                {fname} {lname}
              </h2>
              <p>{title}</p>
              <p>{bio}</p>
              <Img fixed={avatar.childImageSharp.fixed} />
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
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            lname
            order
            title
            twitter
            avatar {
              childImageSharp {
                fixed(
                  width: 125
                  height: 125
                  traceSVG: {
                    color: "#0000ff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
