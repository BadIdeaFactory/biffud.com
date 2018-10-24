import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { defaultThm } from "ui/themes";
import { Action, Icon } from "ui/components";
import { breakpoint, zindex } from "ui/settings";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { setSpace, setType } from "ui/mixins";

// const Body = styled.main``;

const Members = styled.ul`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

const Member = styled.li`
  ${setType("s")};
  border: 2px solid ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.copy};
  grid-row-end: span 1;
  position: relative;
  ${breakpoint.phone} {
    &:not(:last-child) {
      ${setSpace("mbh")};
    }
  }
`;

const MemberAvatar = styled.div`
  position: relative;
  & * {
    width: 100%;
  }
`;

const MemberDetails = styled.div`
  ${setSpace("pal")};
`;

const MemberName = styled.h2`
  ${setType("s")};
  ${setSpace("mbm")};
  color: ${({ theme }) => theme.titleColor};
  font-weight: 900;
  margin-left: -0.5em;
  margin-top: -2.75em;
  position: relative;
  text-transform: uppercase;
  z-index: ${zindex.z1};
  span {
    ${setSpace("phs")};
    ${setSpace("pvx")};
    background: white;
  }
`;

const MemberBio = styled.p``;

const MemberQuote = styled.blockquote`
  ${setType("s")};
  font-style: italic;
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const members = this.props.data.allMarkdownRemark.edges;
    return (
      <>
        <Helmet {...this.props} title="Team members" />
        <Layout {...this.props}>
          <Header>
            <h1>Members</h1>
          </Header>
          <Body>
            <Members>
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
                  <Member>
                    <MemberAvatar>
                      <Img fluid={avatar.childImageSharp.fluid} />
                    </MemberAvatar>
                    <MemberDetails>
                      <MemberName>
                        <span>
                          {fname} {lname}
                        </span>
                      </MemberName>
                      {/* <p>{role}</p> */}
                      <MemberBio>{bio}</MemberBio>
                      {twitter ? (
                        <Action
                          href={`https://twitter.com/${twitter}`}
                          rel="external"
                          target="_blank noreferrer nofollow"
                        >
                          <Icon name="twitter" /> {twitter}
                        </Action>
                      ) : null}
                      {github ? (
                        <Action
                          href={`https://github.com/${github}`}
                          rel="external"
                          target="_blank noreferrer nofollow"
                        >
                          <Icon name="github" /> {github}
                        </Action>
                      ) : null}
                      <MemberQuote>
                        <p>“{quote}”</p>
                      </MemberQuote>
                    </MemberDetails>
                  </Member>
                );
              })}
            </Members>
          </Body>
        </Layout>
      </>
    );
  }
}

PeopleTpl.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};
