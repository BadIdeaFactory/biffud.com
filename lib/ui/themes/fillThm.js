import randomcolor from "randomcolor";
import { darken } from "polished";

import {} from "ui/settings";

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
const fillThm = {
  actionColor: "#ffffff",
  background: getRandomColor(),
  svgFill: "#ffffff",
  decor: darken(0.1, getRandomColor()),
  titleColor: "#ffffff"
};

export default fillThm;
