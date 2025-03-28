const getFluidStyles = (
  property: string,
  minValue: string,
  maxValue: string,
  isImportant: boolean
) => {
  const screen = { min: 320, max: 1440 };
  const minVal = parseInt(minValue, 10);
  const maxVal = parseInt(maxValue, 10);

  return `
    ${property}: ${minValue} ${isImportant ? "!important" : ``};
    @media screen and (min-width: ${screen.min}px) {
      ${property}: calc(${minValue} + ${maxVal - minVal} * (100vw - ${
        screen.min
      }px) / ${screen.max - screen.min}) ${isImportant ? "!important" : ``};
    }
    @media screen and (min-width: ${screen.max}px) {
      ${property}: ${maxValue} ${isImportant ? "!important" : ``};
    }
  `;
};

const fluidify = (
  properties: string | string[],
  minValue: string,
  maxValue: string,
  isImportant: boolean = false
) => {
  if (Array.isArray(properties)) {
    return properties.map((property) =>
      getFluidStyles(property, minValue, maxValue, isImportant)
    );
  }

  return getFluidStyles(properties, minValue, maxValue, isImportant);
};

export default fluidify;
