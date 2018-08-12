import { lead, fsize } from "../settings";
import _fluidify from "./_fluidify";

/* eslint import/prefer-default-export: 0 */
export const setType = (size) => {
  switch (size) {
    case "h":
      return `${_fluidify("font-size", fsize.h[0], fsize.h[1])}line-height: ${
        lead.m
      }`;
    case "l":
      return `${_fluidify("font-size", fsize.l[0], fsize.l[1])}line-height: ${
        lead.m
      }`;
    case "s":
      return `${_fluidify("font-size", fsize.s[0], fsize.s[1])}line-height: ${
        lead.l
      }`;
    case "x":
      return `${_fluidify("font-size", fsize.x[0], fsize.x[1])}line-height: ${
        lead.m
      }`;
    case "m":
    default:
      return `${_fluidify("font-size", fsize.m[0], fsize.m[1])}line-height: ${
        lead.m
      }`;
  }
};
