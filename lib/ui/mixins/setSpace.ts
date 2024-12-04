import { space, type SpaceValue } from "ui/settings";
import fluidify from "./ofMixins/fluidify";

export const setSpace = (args: string, force?: 'force') => {
  const prop: keyof typeof properties = args.substring(0, 1);
  const pos: SpaceValue = args.substring(1, 2);
  const size: SpaceValue = args.substring(2, 3);
  const properties = {
    b: "border-width",
    m: "margin",
    p: "padding"
  };
  const positions: Record<SpaceValue, string> = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
  };
  const isImportant = force === "force";

  switch (pos) {
    case "a":
      return fluidify(
        `${properties[prop]}`,
        space[size][0],
        space[size][1],
        isImportant
      );
    case "k":
      return fluidify(
        [`${properties[prop]}-left`, `${properties[prop]}-right`],
        space[size][0],
        space[size][1],
        isImportant
      );
    case "h":
      return fluidify(
        [`${properties[prop]}-left`, `${properties[prop]}-right`],
        space[size][0],
        space[size][1],
        isImportant
      );
    case "v":
      return fluidify(
        [`${properties[prop]}-top`, `${properties[prop]}-bottom`],
        space[size][0],
        space[size][1],
        isImportant
      );
    default:
      return fluidify(
        `${properties[prop]}-${positions[pos]}`,
        space[size][0],
        space[size][1],
        isImportant
      );
  }
};
