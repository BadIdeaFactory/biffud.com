import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";
import Img from "gatsby-image";

import { Helmet, Layout } from "ui/partials";

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const members = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <Helmet {...this.props} title="Team members" />
        <Layout {...this.props}>
          <h1>All Members</h1>
          {members.map(({ node }) => {
            const { id, frontmatter } = node;
            const {
              avatar,
              bio,
              fname,
              github,
              lname,
              quote,
              role,
              twitter
            } = frontmatter;
            return (
              <Fragment key={id}>
                <h2>
                  {fname} {lname}
                </h2>
                {/* <p>{role}</p> */}
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
                <p>
                  <a
                    href={`https://github.com/${github}`}
                    rel="external"
                    target="_blank noreferrer nofollow"
                  >
                    {github}
                  </a>
                </p>
                <blockquote>
                  <p>{quote}</p>
                </blockquote>
              </Fragment>
            );
          })}
        </Layout>
      </Fragment>
    );
  }
}

PeoplePage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllMembersQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              advisor
              corporate
              elected
              members
              minions
            }
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
