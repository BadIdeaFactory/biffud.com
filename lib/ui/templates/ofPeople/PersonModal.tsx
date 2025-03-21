import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
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

interface PersonPicProps {
  readonly $hasAvatar: boolean;
}

const PersonPic = styled.div<PersonPicProps>`
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

interface PersonModalProps {
  defaultAvatar: NonNullable<
    Queries.PeopleTplQuery["defaultAvatar"]["edges"][0]["node"]["childImageSharp"]
  >;
  data: PersonNode;
  toggleModal: (obj: PersonNode) => void;
}

const PersonModal: React.FC<PersonModalProps> = ({
  defaultAvatar,
  data,
  toggleModal,
}) => {
  const { frontmatter, html } = data ?? {};
  const {
    avatar,
    bluesky,
    fname,
    github,
    lname,
    mastodon,
    quote,
    twitter,
    website,
  } = frontmatter ?? {};

  return (
    <Modal toggleModal={toggleModal as VoidFunction}>
      <Person>
        <PersonPic $hasAvatar={avatar ? true : false}>
          <GatsbyImage
            image={
              avatar?.childImageSharp?.gatsbyImageData
                ? avatar.childImageSharp.gatsbyImageData
                : defaultAvatar.gatsbyImageData
            }
            alt=""
          />
        </PersonPic>
        <PersonDetails>
          <PersonName>
            {fname} {lname}
          </PersonName>
          <PersonBio>
            <Copy dangerouslySetInnerHTML={{ __html: html ?? "" }} />
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
};

export default PersonModal;
