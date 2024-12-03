import { func, object, shape } from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import { Action, Copy, Icon, Modal } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Person = styled.div`
  ${setSpace("pbh")};
  ${breakpoint.tabletUp} {
    display: flex;
    flex-direction: row;
  }
`;
const PersonPic = styled.div`
  background: ${({ $hasAvatar, theme }) =>
    !$hasAvatar ? theme.actionColor : ""};
  ${breakpoint.tabletUp} {
    flex: 0 0 ${100 / 4}%;
  }
  ${breakpoint.phone} {
    ${setSpace("mbl")};
    & > * {
      margin-left: auto;
      margin-right: auto;
      max-width: 200px;
    }
  }
`;
const PersonDetails = styled.div`
  ${setType("s")};
  ${breakpoint.tabletUp} {
    ${setSpace("pll")};
  }
`;
const PersonName = styled.h2`
  ${setType("l")};
  font-weight: 800;
  color: ${({ theme }) => theme.titleColor};
`;
const PersonBio = styled.div`
  ${setSpace("mvm")};
  ${setType("m")};
  color: ${({ theme }) => theme.titleColor};
`;
const PersonQuote = styled.div`
  ${setSpace("mvm")};
`;
const PersonSocial = styled.div`
  & > * {
    ${setSpace("mvx")};
  }
  & > *:not(:last-child) {
    ${setSpace("mrl")};
  }
`;

function Member(props) {
  const { defaultAvatar } = props;
  const { frontmatter, html } = props.data;
  const {
    avatar,
    bluesky,
    fname,
    github,
    lname,
    mastodon,
    quote,
    twitter,
    website
  } = frontmatter;
  return (
    <Modal toggleModal={props.toggleModal}>
      <Person>
        <PersonPic $hasAvatar={avatar}>
          <GatsbyImage
            image={avatar ? avatar.childImageSharp.gatsbyImageData : defaultAvatar.gatsbyImageData}
            alt=""
          />
        </PersonPic>
        <PersonDetails>
          <PersonName>
            {fname} {lname}
          </PersonName>
          <PersonBio>
            <Copy dangerouslySetInnerHTML={{ __html: html }} />
          </PersonBio>
          <PersonQuote>{quote}</PersonQuote>
          <PersonSocial>
            {website && (
              <Action
                href={`https://${website}/`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="website" /> Website
              </Action>
            )}
            {bluesky && (
              <Action
                href={`https://bsky.app/profile/${bluesky}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="bluesky" /> Bluesky
              </Action>
            )}
            {mastodon && (
              <Action
                href={`https://${mastodon}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="mastodon" /> Mastodon
              </Action>
            )}
            {twitter && (
              <Action
                href={`https://twitter.com/${twitter}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="twitter" /> Twitter
              </Action>
            )}
            {github && (
              <Action
                href={`https://github.com/${github}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" /> GitHub
              </Action>
            )}
          </PersonSocial>
        </PersonDetails>
      </Person>
    </Modal>
  );
}

Member.propTypes = {
  defaultAvatar: object.isRequired,
  data: shape({
    frontmatter: object.isRequired
  }).isRequired,
  toggleModal: func.isRequired
};

export default Member;
