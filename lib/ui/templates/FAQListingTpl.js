import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Copy, Tabs, Tab } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";

const Questions = styled(BodyContent)`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  margin-left: auto;
  margin-right: auto;
  max-width: 870px;
`;

const Question = styled.h3`
  ${setSpace("mbs")};
  ${setType("l")};
  color: ${({ theme }) => theme.titleColor};
  font-weight: 700;
  &:not(:first-child) {
    ${setSpace("mth")};
  }
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
    const membershipQuestions = this.props.data.membership.edges;
    const partnershipQuestions = this.props.data.partnership.edges;
    return (
      <>
        <Helmet {...this.props} title="Frequently Asked Questions" />
        <Layout {...this.props}>
          <Header>
            <span className="small">{frontmatter.title}</span>
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "870px"
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
            <Questions isActive={this.state.tab === "partnership"} limit>
              {partnershipQuestions.map(({ node }) => {
                const { frontmatter, html, id } = node;
                const { question } = frontmatter;
                return (
                  <>
                    <Question>{question}</Question>
                    <Copy dangerouslySetInnerHTML={{ __html: html }} />
                  </>
                );
              })}
            </Questions>
            <Questions isActive={this.state.tab === "membership"} limit>
              {membershipQuestions.map(({ node }) => {
                const { frontmatter, html } = node;
                const { question } = frontmatter;
                return (
                  <>
                    <Question>{question}</Question>
                    <Copy dangerouslySetInnerHTML={{ __html: html }} />
                  </>
                );
              })}
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
      sort: { order: ASC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            uid
            score
            question
          }
        }
      }
    }
    partnership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/partnership/*/.*/*.md/" }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            uid
            score
            question
          }
        }
      }
    }
  }
`;
