import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Person = styled.li`
  align-items: center;
  background: white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: box-shadow ${time.s}, transform ${time.s};
  &:hover {
    box-shadow: 6px 6px 0 0 ${({ theme }) => theme.actionDecor};
    transform: translate(-1px, -1px);
  }
  ${breakpoint.tabletUp} {
    ${setSpace("pan")};
    );
  }
`;

interface PersonPicProps {
  readonly $hasAvatar: boolean;
}

const PersonPic = styled.div<PersonPicProps>`
  background: ${({ theme, $hasAvatar }) =>
    $hasAvatar ? "" : theme.actionColor};
  border: 2px solid ${({ theme }) => theme.background};
  flex: 0 0 ${100 / 3}%;
`;

const PersonDetails = styled.div`
  ${setSpace("phm")};
  ${setType("s")};
  ${breakpoint.phone} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const PersonName = styled.h3`
  ${setType("s")};
  color: ${({ theme }) => theme.color};
  span {
    display: block;
    &:first-child {
      ${setType("m")};
      color: ${({ theme }) => theme.actionColor};
      font-weight: 800;
    }
  }
`;

const PersonLinks = styled.div`
  ${setSpace("mts")};
  & > * {
    ${setSpace("mrs")};
    line-height: 1em;
  }
  ${breakpoint.phone} {
    display: none;
  }
`;

interface MemberProps {
  data: PersonNode;
  defaultAvatar: any;
}

function Member(props: MemberProps) {
  const { defaultAvatar } = props;
  const { frontmatter } = props.data;
  const {
    uid,
    avatar,
    bluesky,
    fname,
    github,
    lname,
    mastodon,
    twitter,
    website,
  } = frontmatter ?? {};

  return (
    <Link to={`/people/${uid}`}>
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
            <span>{fname}</span> <span>{lname}</span>
          </PersonName>
          <PersonLinks>
            {website ? (
              <Action
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                href={`https://${website}/`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="website" size="s" />
              </Action>
            ) : null}
            {bluesky ? (
              <Action
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                href={`https://bsky.app/profile/${bluesky}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="bluesky" size="s" />
              </Action>
            ) : null}
            {mastodon ? (
              <Action
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                href={`https://${mastodon}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="mastodon" size="s" />
              </Action>
            ) : null}
            {twitter ? (
              <Action
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                href={`https://twitter.com/${twitter}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="twitter" size="s" />
              </Action>
            ) : null}
            {github ? (
              <Action
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                href={`https://github.com/${github}`}
                rel="external noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" size="s" />
              </Action>
            ) : null}
          </PersonLinks>
        </PersonDetails>
      </Person>
    </Link>
  );
}

export default Member;
