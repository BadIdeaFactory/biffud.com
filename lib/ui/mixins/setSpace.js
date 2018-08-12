import { space } from "ui/settings";
import _fluidify from "./_fluidify";

/* eslint import/prefer-default-export: 0 */
export const setSpace = (args) => {
  const prop = args.substr(0, 1);
  const pos = args.substr(1, 1);
  const size = args.substr(2, 1);
  const properties = {
    b: "border",
    m: "margin",
    p: "padding"
  };
  const positions = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
  };
  switch (pos) {
    case "a":
      return _fluidify(`${properties[prop]}`, space[size][0], space[size][1]);
    case "h":
      return _fluidify(
        [`${properties[prop]}-left`, `${properties[prop]}-right`],
        space[size][0],
        space[size][1]
      );
    case "v":
      return _fluidify(
        [`${properties[prop]}-top`, `${properties[prop]}-bottom`],
        space[size][0],
        space[size][1]
      );
    default:
      return _fluidify(
        `${properties[prop]}-${positions[pos]}`,
        space[size][0],
        space[size][1]
      );
  }
};
