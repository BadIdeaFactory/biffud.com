import React from "react";
import { array, object, oneOfType, string } from "prop-types";

import { ActionEl, GatsbyActionEl } from "./ActionEl";

const linkBase = () => `
`;

const LinkEl = ActionEl.extend`
  ${linkBase};
  border-width: ${({ plain }) => (plain ? "0" : "0 0 2px 0")};
  color: ${({ isActive, theme }) => (isActive ? theme.paint : theme.color)}
  font-family: ${({ theme }) => theme.font};
`;

const GatsbyLinkEl = GatsbyActionEl.extend`
  ${linkBase};
  border-width: ${({ plain }) => (plain ? "0" : "0 0 2px 0")};
  color: ${({ isActive, theme }) => (isActive ? theme.paint : theme.color)}
  font-family: ${({ theme }) => theme.font};
`;

const Link = (props) =>
  props.to === null ? <LinkEl {...props} /> : <GatsbyLinkEl {...props} />;

Link.propTypes = {
  children: oneOfType([array, object, string]),
  href: string,
  to: string
};

Link.defaultProps = {
  children: null,
  href: "",
  to: null
};

export default Link;
