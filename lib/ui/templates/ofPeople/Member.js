import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, color, time } from "ui/settings";
import { setSpace, setType, setWidth } from "ui/mixins";

const Person = styled.li`
  ${setSpace("pal")};
  align-items: center;
  background: white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: box-shadow ${time.s};
  &:hover {
    box-shadow: 2px 2px 0 0 ${({ theme }) => theme.actionColor},
      -2px -2px 0 0 ${({ theme }) => theme.actionColor},
      2px -2px 0 0 ${({ theme }) => theme.actionColor},
      -2px 2px 0 0 ${({ theme }) => theme.actionColor};
  }
`;

const PersonPic = styled.div`
  flex: 0 0 ${100 / 3.5}%;
`;

const PersonDetails = styled.div`
  ${setSpace("plm")};
  ${setType("s")};
  position: relative;
  hr {
    ${setSpace("mtm")};
    ${setSpace("mbs")};
    ${setSpace("pan")};
    ${setWidth("x")};
    border-color: ${color.shadowHL};
    border-style: solid;
    border-width: 1px 0 0 0;
    display: inline-block;
    height: 1px;
  }
  ${breakpoint.phone} {
    ${setSpace("mhm")};
    margin-top: -1em;
  }
`;

const PersonName = styled.h3`
  ${setType("s")};
  color: ${({ theme }) => theme.color};
  span {
    display: block;
    line-height: 1.2em;
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
    line-height: 1.2em;
    ${setSpace("mrs")};
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
              <Icon name="twitter" size="x" />
            </Action>
          ) : null}
          {github ? (
            <Action
              onClick={e => e.stopPropagation()}
              href={`https://github.com/${github}`}
              rel="external"
              target="_blank noreferrer nofollow"
            >
              <Icon name="github" size="x" />
            </Action>
          ) : null}
        </PersonLinks>
        <div />
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
