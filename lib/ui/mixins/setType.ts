import { lead, fsize, type FSizeValue } from "ui/settings";
import fluidify from "./ofMixins/fluidify";

/* eslint import/prefer-default-export: 0 */
export const setType = (size: FSizeValue) => {
  switch (size) {
    case "k":
      return `${fluidify("font-size", fsize.k[0], fsize.k[1])}line-height: ${
        lead.s
      }`;
    case "h":
      return `${fluidify("font-size", fsize.h[0], fsize.h[1])}line-height: ${
        lead.s
      }`;
    case "l":
      return `${fluidify("font-size", fsize.l[0], fsize.l[1])}line-height: ${
        lead.s
      }`;
    case "s":
      return `${fluidify("font-size", fsize.s[0], fsize.s[1])}line-height: ${
        lead.l
      }`;
    case "x":
      return `${fluidify("font-size", fsize.x[0], fsize.x[1])}line-height: ${
        lead.l
      }`;
    case "m":
    default:
      return `${fluidify("font-size", fsize.m[0], fsize.m[1])}line-height: ${
        lead.m
      }`;
  }
};

export { FSizeValue };
