import { shape, string } from "prop-types";
import React from "react";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { SiBluesky, SiMastodon } from "react-icons/si";

import "assets/fonts";
import { setType } from "ui/mixins";

const IconEl = styled.i`
  ${({ size = 's' }) => setType(size)};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => (theme.iconColor || 'inherit') };
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

function Icon(props) {
  const { name, text, ...restProps } = props;
  switch (name) {
    // I'm not going to generate a new IcoMoon font for these
    // and in any case they don't have Bluesky or Mastdon readily
    // available anyway. Generating icons with react-icons is 100%
    // more flexible
    case 'bluesky':
      return (
        <IconEl {...restProps} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <SiBluesky />
        </IconEl>
      )
    case 'mastodon':
      return (
        <IconEl {...restProps} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <SiMastodon />
        </IconEl>
      )
    case 'website':
      return (
        <IconEl {...restProps} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <FaLink />
        </IconEl>
      )
    default:
      return (
        <IconEl {...restProps} className={`icon-${name}`}>
          {text ? <span>{text}</span> : null}
        </IconEl>
      )
  }
}

Icon.propTypes = {
  name: string.isRequired,
  size: string,
  text: string,
  theme: shape({
    iconColor: string
  })
};

export default Icon;
