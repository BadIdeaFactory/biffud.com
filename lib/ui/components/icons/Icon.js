/* eslint no-unused-vars: 0 */
import { shape, string } from "prop-types";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { icomoon } from "assets/fonts";
import { setType } from "ui/mixins";

const IconEl = styled.i`
  ${({ size }) => setType(size)};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.iconColor};
  font-family: "bif-iconfont";
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1em !important;
  speak: none;
  text-transform: none;
  span {
    color: transparent;
    height: 1px;
    left: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 1px;
  }
`;

const Icon = props => (
  <IconEl {...props} className={`icon-${props.name} `}>
    {props.text ? <span>{props.text}</span> : null}
  </IconEl>
);

Icon.propTypes = {
  name: string.isRequired,
  size: string,
  theme: shape({
    iconColor: string
  })
};

Icon.defaultProps = {
  size: "s",
  theme: {
    iconColor: "inherit"
  }
};

export default Icon;
