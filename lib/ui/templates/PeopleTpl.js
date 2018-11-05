import { object, shape } from "prop-types";
import { graphql } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { time, track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import Member from "./ofPeople/Member";

const PeopleSection = styled(BodyContent)`
  ${setSpace("mbh")};
  ${setSpace("pbn")};
  ${setSpace("phn")};
  ${setSpace("ptl")};
`;

const People = styled.ul`
  animation: ${fadeIn} ${time.l} linear;
  width: 100%;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const PeopleDesc = styled.div`
  ${setSpace("mbl")};
  align-items: center;
  text-align: center;
  h2 {
    ${setSpace("mbs")};
    ${setType("l")};
    color: ${({ theme }) => theme.titleColor};
    flex: 0 0 50%;
    font-weight: 900;
    letter-spacing: ${track.m};
    text-transform: uppercase;
  }
  p {
    ${setType("l")};
    flex: 0 0 50%;
  }
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { overlords, members, accomplices } = this.props.data;
    const { frontmatter } = this.props.data.markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Header>
            <span className="small">{frontmatter.title}</span>
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body>
            <PeopleSection>
              <PeopleDesc>
                <h2>{frontmatter.overlordsHeading}</h2>
                <p>{frontmatter.overlordsDescr}</p>
              </PeopleDesc>
              <People>
                {overlords.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </PeopleSection>
            <PeopleSection>
              <PeopleDesc>
                <h2>{frontmatter.membersHeading}</h2>
                <p>{frontmatter.membersDescr}</p>
              </PeopleDesc>
              <People>
                {members.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </PeopleSection>
            <PeopleSection>
              <PeopleDesc>
                <h2>{frontmatter.accomplicesHeading}</h2>
                <p>{frontmatter.accomplicesDescr}</p>
              </PeopleDesc>
              <People>
                {accomplices.edges.map(({ node }) => (
                  <Member key={node.frontmatter.uid} data={node} />
                ))}
              </People>
            </PeopleSection>
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
        accomplicesDescr
        membersHeading
        membersDescr
        overlordsHeading
        overlordsDescr
      }
    }
    overlords: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/bios/*/.*/*.md/" }
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
                  maxWidth: 200
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
        fileAbsolutePath: { regex: "//pages/people/bios/*/.*/*.md/" }
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
                  maxWidth: 200
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
        fileAbsolutePath: { regex: "//pages/people/bios/*/.*/*.md/" }
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
                  maxWidth: 200
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
