import { space, type SpaceValue } from "ui/settings";
import fluidify from "./ofMixins/fluidify";

type PropertyValue = keyof typeof properties;
type PositionValue = "a" | "h" | "v" | keyof typeof positions;
type SpaceShorthand = `${PropertyValue}${PositionValue}${SpaceValue}`;

const properties = {
  b: "border-width",
  m: "margin",
  p: "padding",
};
const positions = {
  t: "top",
  b: "bottom",
  l: "left",
  r: "right",
};

export const setSpace = (args: SpaceShorthand, force?: "force") => {
  const prop: PropertyValue = args.substring(0, 1) as PropertyValue;
  const pos: PositionValue = args.substring(1, 2) as PositionValue;
  const size: SpaceValue = args.substring(2, 3) as SpaceValue;
  const isImportant = force === "force";

  switch (pos) {
    // a = all sides
    case "a":
      return fluidify(
        `${properties[prop]}`,
        space[size][0],
        space[size][1],
        isImportant
      );
    // h = horizontal (left & right)
    case "h":
      return fluidify(
        [`${properties[prop]}-left`, `${properties[prop]}-right`],
        space[size][0],
        space[size][1],
        isImportant
      );
    // v = vertical (top & bottom)
    case "v":
      return fluidify(
        [`${properties[prop]}-top`, `${properties[prop]}-bottom`],
        space[size][0],
        space[size][1],
        isImportant
      );
    // default: single side (top / bottom / left / right)
    default:
      return fluidify(
        `${properties[prop]}-${positions[pos]}`,
        space[size][0],
        space[size][1],
        isImportant
      );
  }
};

// Re-export for use with typing setSpace()
export { SpaceValue };
