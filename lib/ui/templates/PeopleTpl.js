import { object, shape } from "prop-types";
import { graphql } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { breakpoint, time, track } from "ui/settings";
import { fadeIn } from "ui/animations";
import { setSpace, setType } from "ui/mixins";
import Person from "./ofPeople/Person";
import PersonModal from "./ofPeople/PersonModal";

const PeopleSection = styled.section`
  ${setSpace("mbk")};
`;

const People = styled.ul`
  animation: ${fadeIn} ${time.l} linear;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  ${breakpoint.phone} {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  ${breakpoint.tabletUp} {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

const PeopleIntro = styled.div`
  ${setSpace("mbh")};
  text-align: center;
  h2 {
    ${setSpace("mbm")};
    ${setSpace("phs")};
    ${setSpace("pvx")};
    ${setType("s")};
    background: white;
    color: ${({ theme }) => theme.actionColor};
    display: inline-block;
    font-weight: 800;
    letter-spacing: ${track.m};
    text-transform: uppercase;
  }
  p {
    ${setType("l")};
    color: white;
  }
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPerson: null
    };
    this.handleShowPerson = this.handleShowPerson.bind(this);
  }

  handleShowPerson(obj) {
    this.setState(prevState => ({
      currentPerson: prevState.currentPerson ? null : obj
    }));
  }

  render() {
    const { currentPerson } = this.state;
    const { defaultAvatar, overlords, members, accomplices } = this.props.data;
    const { frontmatter } = this.props.data.markdownRemark;
    const genericAvatar = defaultAvatar.edges[0].node.childImageSharp;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Header>
            <h1 className="hero">{frontmatter.heading}</h1>
            <p className="para">{frontmatter.subheading}</p>
          </Header>
          <Body>
            <PeopleSection>
              <PeopleIntro>
                <h2>{frontmatter.overlordsHeading}</h2>
                <p>{frontmatter.overlordsDescr}</p>
              </PeopleIntro>
              <People>
                {overlords.edges.map(({ node }) => (
                  <Person
                    data={node}
                    defaultAvatar={genericAvatar}
                    key={node.frontmatter.uid}
                    toggleModal={e => this.handleShowPerson(node, e)}
                  />
                ))}
              </People>
            </PeopleSection>
            <PeopleIntro>
              <h2>{frontmatter.membersHeading}</h2>
              <p>{frontmatter.membersDescr}</p>
            </PeopleIntro>
            <PeopleSection>
              <People>
                {members.edges.map(({ node }) => (
                  <Person
                    data={node}
                    defaultAvatar={genericAvatar}
                    key={node.frontmatter.uid}
                    toggleModal={e => this.handleShowPerson(node, e)}
                  />
                ))}
              </People>
            </PeopleSection>
            <PeopleSection>
              <PeopleIntro>
                <h2>{frontmatter.accomplicesHeading}</h2>
                <p>{frontmatter.accomplicesDescr}</p>
              </PeopleIntro>
              <People>
                {accomplices.edges.map(({ node }) => (
                  <Person
                    data={node}
                    defaultAvatar={genericAvatar}
                    key={node.frontmatter.uid}
                    toggleModal={e => this.handleShowPerson(node, e)}
                  />
                ))}
              </People>
            </PeopleSection>
          </Body>
          {currentPerson !== null ? (
            <PersonModal
              toggleModal={this.handleShowPerson}
              data={currentPerson}
              defaultAvatar={genericAvatar}
            />
          ) : null}
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

export const pageQuery = graphql`query PeopleTplQuery($uid: String!) {
  markdownRemark(frontmatter: {uid: {eq: $uid}}) {
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
  defaultAvatar: allFile(
    filter: {relativePath: {eq: "images/default-avatar.png"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(
            width: 240
            height: 300
            quality: 90
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
        }
      }
    }
  }
  overlords: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "//pages/people/bios/*/.*/*.md/"}, frontmatter: {role: {elemMatch: {overlord: {eq: true}}}}}
    sort: {frontmatter: {fname: ASC}}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          bluesky
          fname
          github
          lname
          mastodon
          quote
          score
          twitter
          website
          uid
          avatar {
            childImageSharp {
              gatsbyImageData(
                width: 240
                height: 300
                placeholder: DOMINANT_COLOR
                transformOptions: {cropFocus: CENTER}
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
  members: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "//pages/people/bios/*/.*/*.md/"}, frontmatter: {role: {elemMatch: {member: {eq: true}}}}}
    sort: {frontmatter: {fname: ASC}}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          bluesky
          fname
          github
          lname
          mastodon
          quote
          score
          twitter
          website
          uid
          avatar {
            childImageSharp {
              gatsbyImageData(
                width: 240
                height: 300
                placeholder: DOMINANT_COLOR
                transformOptions: {cropFocus: CENTER}
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
  accomplices: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "//pages/people/bios/*/.*/*.md/"}, frontmatter: {role: {elemMatch: {accomplice: {eq: true}}}}}
    sort: {frontmatter: {fname: ASC}}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          bluesky
          fname
          github
          lname
          mastodon
          quote
          score
          twitter
          website
          uid
          avatar {
            childImageSharp {
              gatsbyImageData(
                width: 240
                height: 300
                placeholder: DOMINANT_COLOR
                transformOptions: {cropFocus: CENTER}
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
}`;
