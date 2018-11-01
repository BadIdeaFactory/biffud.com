import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import {} from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const MemberEl = styled.li``;

const MemberAvatar = styled.div``;

const MemberDetails = styled.div``;

const MemberName = styled.h3``;

const MemberBio = styled.p``;

const MemberQuote = styled.blockquote``;

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
