import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Body, Helmet, Layout } from "ui/partials";
import { Action, Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";

const Pitch = styled.header`
  ${setSpace("mbh")};
  ${setSpace("pbh")};
  ${setType("s")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;
  text-align: left;
  h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
`;

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1>{frontmatter.heading}</h1>
            <Actionbar>
              <Action button to="/projects">
                {frontmatter.projectsCta}
              </Action>
              <Action to="/contact">{frontmatter.contactCta}</Action>
            </Actionbar>
          </Pitch>
          <Body>Some body</Body>
        </Layout>
      </>
    );
  }
}

HomeTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query HomeTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        contactCta
        projectsCta
      }
    }
  }
`;
