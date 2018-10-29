import randomcolor from "randomcolor";

import { color } from "ui/settings";

const randomColor = randomcolor({ luminosity: "dark" });

// Define theme
const whiteThm = {
  actionColor: randomColor,
  background: "white",
  color: color.monoM,
  decor: color.monoWt,
  svgFill: "white",
  titleColor: color.monoLD
};

export default whiteThm;
