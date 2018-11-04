import { object, shape } from "prop-types";
import { graphql } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import { Tabs, Tab } from "ui/components";
import { Body, BodyHead, Header, Helmet, Layout } from "ui/partials";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import Member from "./ofPeople/Member";

const PeopleSection = styled.div`
  ${setSpace("pah")};
  background: white;
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const People = styled.ul`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;
const PeopleHeading = styled.h2`
  ${setSpace("mbh")};
  ${setType("l")};
  font-weight: 700;
  color: ${({ theme }) => theme.titleColor};
  text-align: center;
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "overlords"
    };
    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(tab) {
    this.setState({ tab });
  }

  render() {
    const { overlords, members, accomplices } = this.props.data;
    const { frontmatter } = this.props.data.markdownRemark;
    const { tab } = this.state;
    const displayTabbedContent = () => {
      switch (tab) {
        case "overlords":
        default:
          return (
            <>
              <PeopleHeading>{frontmatter.overlordsHeading}</PeopleHeading>
              <People>
                {overlords.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </>
          );
        case "accomplices":
          return (
            <>
              <PeopleHeading>{frontmatter.accomplicesHeading}</PeopleHeading>
              <People>
                {accomplices.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </>
          );
        case "members":
          return (
            <>
              <PeopleHeading>{frontmatter.membersHeading}</PeopleHeading>
              <People>
                {members.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </>
          );
      }
    };
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Header>
            <h1>{frontmatter.title}</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>{frontmatter.heading}</h1>
              <p>{frontmatter.subheading}</p>
            </BodyHead>
            <Tabs count={3}>
              <Tab
                handleClick={() => this.switchTab("overlords")}
                href="#overlords"
                isActive={tab === "overlords"}
              >
                {frontmatter.overlordsTab}
              </Tab>
              <Tab
                handleClick={() => this.switchTab("members")}
                href="#members"
                isActive={tab === "members"}
              >
                {frontmatter.membersTab}
              </Tab>
              <Tab
                handleClick={() => this.switchTab("accomplices")}
                href="#accomplices"
                isActive={tab === "accomplices"}
              >
                {frontmatter.accomplicesTab}
              </Tab>
            </Tabs>
            <PeopleSection>{displayTabbedContent()}</PeopleSection>
          </Body>
        </Layout>
      </>
    );
  }
}

PeopleTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired,
    overlords: object.isRequired,
    members: object.isRequired,
    accomplices: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query PeopleTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        accomplicesHeading
        accomplicesTab
        membersHeading
        membersTab
        overlordsHeading
        overlordsTab
      }
    }
    overlords: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { overlord: { eq: true } } } }
      }
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
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    members: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { member: { eq: true } } } }
      }
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
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    accomplices: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { accomplice: { eq: true } } } }
      }
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
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
