import React from "react";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { SiBluesky, SiMastodon } from "react-icons/si";

import "assets/fonts";
import { setType, type FSizeValue } from "ui/mixins";

interface IconElProps {
  readonly $size?: FSizeValue
}

const IconEl = styled.i<IconElProps>`
  ${({ $size = 's' }) => setType($size)};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => (theme.iconColor ?? 'inherit') };
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

interface IconProps {
  name: string;
  text?: string;
  size?: FSizeValue;
}

const Icon: React.FC<IconProps> = ({ name, text, size, ...props }) => {
  switch (name) {
    // I'm not going to generate a new IcoMoon font for these
    // and in any case they don't have Bluesky or Mastdon readily
    // available anyway. Generating icons with react-icons is 100%
    // more flexible
    case 'bluesky':
      return (
        <IconEl {...props} $size={size} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <SiBluesky />
        </IconEl>
      )
    case 'mastodon':
      return (
        <IconEl {...props} $size={size} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <SiMastodon />
        </IconEl>
      )
    case 'website':
      return (
        <IconEl {...props} $size={size} className={`icon-${name}`} style={{
          top: '1px',
          position: 'relative'
        }}>
          <FaLink />
        </IconEl>
      )
    default:
      return (
        <IconEl {...props} $size={size} className={`icon-${name}`}>
          {text ? <span>{text}</span> : null}
        </IconEl>
      )
  }
}

export default Icon;
