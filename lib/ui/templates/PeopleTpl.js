import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";
import Img from "gatsby-image";

import { Helmet, Layout } from "ui/partials";

export default class PeopleTpl extends Component {
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

PeopleTpl.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};
