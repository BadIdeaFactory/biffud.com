import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const MemberEl = styled.li`
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

const MemberName = styled.h3`
  ${setType("s")};
  ${setSpace("mbm")};
  color: ${({ theme }) => theme.titleColor};
  font-weight: 900;
  margin-left: -0.5em;
  margin-top: -2.75em;
  position: relative;
  text-transform: uppercase;
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

const Member = props => {
  const { frontmatter } = props.data;
  const { avatar, bio, fname, github, lname, quote, twitter } = frontmatter;
  return (
    <MemberEl>
      <MemberAvatar>
        <Img fluid={avatar.childImageSharp.fluid} />
      </MemberAvatar>
      <MemberDetails>
        <MemberName>
          <span>
            {fname} {lname}
          </span>
        </MemberName>
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
    </MemberEl>
  );
};

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
