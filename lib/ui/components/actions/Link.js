/* eslint jsx-a11y/anchor-has-content: 0 */
/* eslint react/button-has-type: 0 */
import { array, func, object, oneOfType, shape, string } from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, time } from "ui/settings";

const LinkEl = styled.a`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 400;
  line-height: inherit;
  text-align: center;
  text-decoration: none;
  transition: color ${time.m};
  white-space: nowrap;
`;

const Link = props => {
  const { onClick, to } = props;
  if (to) {
    return <LinkEl as={GatsbyLink} {...props} theme={null} />;
  }
  if (onClick) {
    return <LinkEl as="a" {...props} />;
  }
  return <LinkEl {...props} />;
};

Link.propTypes = {
  children: oneOfType([array, object, string]),
  href: string,
  onClick: func,
  theme: shape({
    actionColor: string
  }),
  to: string
};

Link.defaultProps = {
  children: null,
  href: "",
  onClick: null,
  theme: {
    actionColor: defaultThm.actionColor
  },
  to: null
};

export default Link;
