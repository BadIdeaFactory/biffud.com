import randomcolor from "randomcolor";

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
  svgFill: "white"
};

export default defaultThm;
