import React, { useState } from "react";
import { graphql, navigate, type PageProps } from "gatsby";
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

const PeopleTpl = (props: PageProps<Queries.PeopleTplQuery>) => {
  const { defaultAvatar, overlords, members, accomplices, all } = props.data;
  const { frontmatter } = props.data.markdownRemark ?? {};
  const genericAvatar = defaultAvatar.edges[0].node.childImageSharp;

  // For routing to a specific person
  const personId = window.location.pathname
    .replace("/people/", "")
    .replace("/", "");
  const personObj = all.edges.find(
    ({ node }: { node: PersonNode }) => node.frontmatter?.uid === personId
  );

  const [currentPerson, setCurrentPerson] = useState<PersonNode | null>(
    personObj?.node ?? null
  );

  // from the <Modal /> component when it closes force a navigation back to
  // parent page
  function closeModal() {
    navigate("/people");
  }

  return (
    <>
      <Helmet {...props} title={frontmatter?.title ?? ""} />
      <Layout {...props}>
        <Header>
          <h1 className="hero">{frontmatter?.heading}</h1>
          <p className="para">{frontmatter?.subheading}</p>
        </Header>
        <Body>
          <PeopleSection>
            <PeopleIntro>
              <h2>{frontmatter?.overlordsHeading}</h2>
              <p>{frontmatter?.overlordsDescr}</p>
            </PeopleIntro>
            <People>
              {overlords.edges.map(({ node }: { node: PersonNode }) => (
                <Person
                  data={node}
                  defaultAvatar={genericAvatar}
                  key={node.frontmatter?.uid}
                />
              ))}
            </People>
          </PeopleSection>
          <PeopleIntro>
            <h2>{frontmatter?.membersHeading}</h2>
            <p>{frontmatter?.membersDescr}</p>
          </PeopleIntro>
          <PeopleSection>
            <People>
              {members.edges.map(({ node }: { node: PersonNode }) => (
                <Person
                  data={node}
                  defaultAvatar={genericAvatar}
                  key={node.frontmatter?.uid}
                />
              ))}
            </People>
          </PeopleSection>
          <PeopleSection>
            <PeopleIntro>
              <h2>{frontmatter?.accomplicesHeading}</h2>
              <p>{frontmatter?.accomplicesDescr}</p>
            </PeopleIntro>
            <People>
              {accomplices.edges.map(({ node }: { node: PersonNode }) => (
                <Person
                  data={node}
                  defaultAvatar={genericAvatar}
                  key={node.frontmatter?.uid}
                />
              ))}
            </People>
          </PeopleSection>
        </Body>
        {currentPerson !== null ? (
          <PersonModal
            toggleModal={closeModal}
            data={currentPerson}
            defaultAvatar={genericAvatar!}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default PeopleTpl;

export const pageQuery = graphql`
  query PeopleTpl($uid: String!) {
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
    defaultAvatar: allFile(
      filter: { relativePath: { eq: "images/default-avatar.png" } }
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
      filter: {
        fileAbsolutePath: { regex: "//pages/people/bios/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { overlord: { eq: true } } } }
      }
      sort: { frontmatter: { fname: ASC } }
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
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
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
      sort: { frontmatter: { fname: ASC } }
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
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
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
      sort: { frontmatter: { fname: ASC } }
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
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
    all: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/people/bios/*/.*/*.md/" } }
      sort: { frontmatter: { fname: ASC } }
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
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`;
