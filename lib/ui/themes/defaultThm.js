import randomcolor from "randomcolor";

import { color } from "ui/settings";

const getRandomColor = () => {
  if (typeof window !== "undefined") {
    return randomcolor({ luminosity: "dark" });
  }
  return "blue";
};

// Define theme
const defaultThm = {
  actionColor: "white",
  background: getRandomColor(),
  color: color.monoHD,
  decor: "white",
  svgFill: "white",
  titleColor: "white"
};

export default defaultThm;
