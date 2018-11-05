import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, color, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Person = styled.li`
  align-items: center;
  background: ${color.flareBlk};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: background ${time.s};
  &:hover {
    background: white;
  }
  ${breakpoint.tabletUp} {
    ${setSpace("pam")};
  }
`;

const PersonPic = styled.div`
  flex: 0 0 ${100 / 3}%;
  ${breakpoint.phone} {
    flex: 0 0 ${100 / 6}%;
  }
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
      font-weight: 700;
    }
  }
`;

const PersonLinks = styled.div`
  ${setSpace("mts")};
  & > * {
    ${setSpace("mrs")};
    line-height: 1em;
  }
`;

const Member = props => {
  const { frontmatter } = props.data;
  const { avatar, bio, fname, github, lname, quote, twitter } = frontmatter;
  return (
    <Person
      onClick={e => alert(`${fname}, ${lname}, ${bio}, ${quote}`)}
      role="button"
    >
      <PersonPic>
        <Img fluid={avatar.childImageSharp.fluid} />
      </PersonPic>
      <PersonDetails>
        <PersonName>
          <span>{fname}</span> <span>{lname}</span>
        </PersonName>
        <PersonLinks>
          {twitter ? (
            <Action
              onClick={e => e.stopPropagation()}
              href={`https://twitter.com/${twitter}`}
              rel="external"
              target="_blank noreferrer nofollow"
            >
              <Icon name="twitter" size="s" />
            </Action>
          ) : null}
          {github ? (
            <Action
              onClick={e => e.stopPropagation()}
              href={`https://github.com/${github}`}
              rel="external"
              target="_blank noreferrer nofollow"
            >
              <Icon name="github" size="s" />
            </Action>
          ) : null}
        </PersonLinks>
        {/* <Bio>
          <p>{bio}</p>
        </Bio>
        <hr />
        <Quote>
          <p>“{quote}”</p>
        </Quote> */}
      </PersonDetails>
    </Person>
  );
};

Member.propTypes = {
  data: shape({
    frontmatter: object.isRequired
  })
};

Member.defaultProps = {};

export default Member;
