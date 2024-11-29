import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Tabs, Tab, Tile } from "ui/components";
import { setSpace } from "ui/mixins";

const Questions = styled(Tile)`
  ${setSpace("pah")};
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
`;

export default class FAQListingTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "partnership"
    };
    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(str) {
    this.setState({ tab: str });
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const membershipQuestions = this.props.data.membership.edges[0].node.html;
    const partnershipQuestions = this.props.data.partnership.edges[0].node.html;
    return (
      <>
        <Helmet {...this.props} title="Frequently Asked Questions" />
        <Layout {...this.props}>
          <Header>
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "900px"
            }}
          >
            <Tabs count={2}>
              <Tab
                handleClick={() => this.switchTab("partnership")}
                isActive={this.state.tab === "partnership"}
              >
                {frontmatter.partnershipTab}
              </Tab>
              <Tab
                handleClick={() => this.switchTab("membership")}
                isActive={this.state.tab === "membership"}
              >
                {frontmatter.membershipTab}
              </Tab>
            </Tabs>
            <Questions $isActive={this.state.tab === "partnership"}>
              <Copy
                dangerouslySetInnerHTML={{ __html: partnershipQuestions }}
              />
            </Questions>
            <Questions $isActive={this.state.tab === "membership"}>
              <Copy dangerouslySetInnerHTML={{ __html: membershipQuestions }} />
            </Questions>
          </Body>
        </Layout>
      </>
    );
  }
}

FAQListingTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired,
    membership: object.isRequired,
    partnership: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query FAQTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        membershipTab
        partnershipTab
      }
    }
    membership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/membership/*/.*/*.md/" }
      }
      sort: { frontmatter: { score: ASC } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    partnership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/partnership/*/.*/*.md/" }
      }
      sort: { frontmatter: { score: DESC } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;
