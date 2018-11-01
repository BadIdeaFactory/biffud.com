import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, color } from "ui/settings";
import { setSize, setSpace, setType, setWidth } from "ui/mixins";

const Person = styled.li`
  position: relative;
  ${breakpoint.phone} {
    ${setSpace("mbh")};
  }
`;

const Avatar = styled.div`
  ${breakpoint.phone} {
    ${setSize("k")};
  }
  ${breakpoint.tabletUp} {
    ${setSize("h")};
  }
`;

const Details = styled.div`
  ${setSpace("mlh")};
  ${setSpace("plm")};
  ${setSpace("pvs")};
  ${setType("s")};
  background: white;
  margin-top: -2em;
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

const Head = styled.div`
  & > * {
    ${setSpace("mrs")};
  }
  h3 {
    ${setType("m")};
    color: ${({ theme }) => theme.titleColor};
    display: inline-block;
    font-weight: 700;
  }
`;

const Bio = styled.p`
  ${setType("s")};
`;

const Quote = styled.blockquote`
  ${setType("x")};
`;
const QuoteLabel = styled.h4`
  ${setSpace("prs")};
  background: white;
  display: inline-block;
  font-weight: 700;
  position: relative;
  margin-top: -4em;
`;

const Member = props => {
  const { frontmatter } = props.data;
  const { avatar, bio, fname, github, lname, quote, twitter } = frontmatter;
  return (
    <Person>
      <Avatar>
        <Img fluid={avatar.childImageSharp.fluid} />
      </Avatar>
      <Details>
        <Head>
          <h3>
            {fname} {lname}
          </h3>
          {twitter ? (
            <Action
              href={`https://twitter.com/${twitter}`}
              rel="external"
              target="_blank noreferrer nofollow"
            >
              <Icon name="twitter" size="x" />
            </Action>
          ) : null}
          {github ? (
            <Action
              href={`https://github.com/${github}`}
              rel="external"
              target="_blank noreferrer nofollow"
            >
              <Icon name="github" size="x" />
            </Action>
          ) : null}
          <div />
        </Head>
        <Bio>
          <p>{bio}</p>
        </Bio>
        <hr />
        <Quote>
          <p>“{quote}”</p>
        </Quote>
      </Details>
    </Person>
  );
};

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
