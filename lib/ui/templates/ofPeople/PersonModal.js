import { func, object, shape } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon, Modal } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Person = styled.div`
  ${breakpoint.phone} {
    text-align: center;
  }
  ${breakpoint.tabletUp} {
    display: flex;
    flex-direction: row;
  }
`;
const PersonPic = styled.div`
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
  font-weight: 900;
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
  & > *:not(:first-child) {
    ${setSpace("mlm")};
  }
  & > *:not(:last-child) {
    ${setSpace("mrm")};
  }
`;

const Member = props => {
  const { frontmatter, html } = props.data;
  const { avatar, fname, github, lname, quote, twitter } = frontmatter;
  return (
    <Modal toggleModal={props.toggleModal}>
      <Person>
        {avatar ? (
          <PersonPic>
            <Img fluid={avatar.childImageSharp.fluid} />
          </PersonPic>
        ) : null}
        <PersonDetails>
          <PersonName>
            {fname} {lname}
          </PersonName>
          <PersonBio>{html}</PersonBio>
          <PersonQuote>{quote}</PersonQuote>
          <PersonSocial>
            <Action href={`https://github.com/${github}`} target="_blank">
              <Icon name="github" /> Github
            </Action>
            <Action href={`https://twitter.com/${twitter}`} target="_blank">
              <Icon name="twitter" /> Twitter
            </Action>
          </PersonSocial>
        </PersonDetails>
      </Person>
    </Modal>
  );
};

Member.propTypes = {
  data: shape({
    frontmatter: object.isRequired
  }).isRequired,
  toggleModal: func.isRequired
};

Member.defaultProps = {};

export default Member;
