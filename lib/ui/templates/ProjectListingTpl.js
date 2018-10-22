import { Link } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Body, Fold, Helmet, Layout } from "ui/partials";

const ListingItem = styled.div``;

export default class ProjectListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const works = data.allMarkdownRemark.edges;
    return (
      <>
        <Helmet {...this.props} title="Our projects" />
        <Layout {...this.props}>
          <Fold>
            <h1>Works</h1>
          </Fold>
          <Body>
            {works.map(({ node }) => {
              const { id, frontmatter } = node;
              const { cover, date, title, uid } = frontmatter;
              return (
                <ListingItem key={id}>
                  <Link to={`/projects/${uid}`}>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} />
                  </Link>
                  <Link to={`/projects/${uid}`}>
                    <h2>{title}</h2>
                  </Link>
                  <span>{date}</span>
                </ListingItem>
              );
            })}
          </Body>
        </Layout>
      </>
    );
  }
}

ProjectListingTpl.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};
