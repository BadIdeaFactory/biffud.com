import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Action } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { setSpace } from "ui/mixins";

const ListingItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:not(:first-child) {
    ${setSpace("mth")};
  }
`;

const ProjectCover = styled.div`
  flex: 0 0 ${(100 / 3) * 2}%;
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const ProjectDetails = styled.div`
  flex: 0 0 ${100 / 3}%;
`;

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
          <Header>
            <h1>Our projects</h1>
          </Header>
          <Body>
            {works.map(({ node }) => {
              const { id, frontmatter } = node;
              const { cover, date, title, uid } = frontmatter;
              return (
                <ListingItem key={id}>
                  <ProjectCover>
                    <Action
                      to={`/projects/${uid}`}
                      style={{ display: "block" }}
                    >
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Action>
                  </ProjectCover>
                  <ProjectDetails>
                    <h2>
                      <Action to={`/projects/${uid}`}>{title}</Action>
                    </h2>
                    <span>{date}</span>
                  </ProjectDetails>
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
