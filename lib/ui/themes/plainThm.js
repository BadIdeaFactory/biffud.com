import randomcolor from "randomcolor";
import {} from "polished";

import { color } from "ui/settings";

const getRandomColor = () => {
  if (typeof window !== "undefined") {
    const storedColor = localStorage.getItem("BIFHEX");
    const generateNewColor = () => {
      const generatedColor = randomcolor({ luminosity: "dark" });
      localStorage.setItem("BIFHEX", generatedColor);
      return generatedColor;
    };
    return storedColor !== null ? storedColor : generateNewColor();
  }
  return "blue";
};

// Define theme
const defaultThm = {
  actionColor: getRandomColor(),
  background: getRandomColor(),
  copy: color.monoM,
  decor: getRandomColor(),
  svgFill: getRandomColor(),
  titleColor: "#333333"
};

export default defaultThm;
