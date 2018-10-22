import randomcolor from "randomcolor";
import { lighten, darken } from "polished";

import { color } from "ui/settings";

const getRandomColor = () => {
  const storedColor = localStorage.getItem("BIFHEX");
  const generateNewColor = () => {
    const generatedColor = randomcolor({ lightness: "dark" });
    localStorage.setItem("BIFHEX", generatedColor);
    return generatedColor;
  };
  return storedColor !== null ? storedColor : generateNewColor();
};

// Define theme
const defaultThm = {
  actionColor: "white",
  background: getRandomColor(),
  svgFill: "white",
  decor: darken(0.1, getRandomColor()),
  titleColor: "white"
};

export default defaultThm;
