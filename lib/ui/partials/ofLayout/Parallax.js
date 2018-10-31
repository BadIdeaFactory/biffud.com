import Plx from "react-plx";
import React from "react";
import styled from "styled-components";

import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";
import {} from "ui/animations";
import {} from "ui/settings";

const ParallaxEl = styled.div`
  bottom: 0;
  left: 0;
  overflow: visible;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  .PlxEl {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .PlxEl1 {
    background-image: url(${scatteredBif1});
  }
  .PlxEl2 {
    background-image: url(${scatteredBif2});
  }
  .PlxEl3 {
    background-image: url(${scatteredBif3});
  }
`;

const Parallax = () => {
  const layer1plx = [
    {
      easing: "easeInOutSine",
      end: 500,
      start: 0,
      properties: [
        {
          startValue: 0,
          endValue: -200,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutSine",
      end: ".plxFoo",
      start: 500,
      properties: [
        {
          startValue: -200,
          endValue: 200,
          property: "translateY"
        }
      ]
    }
  ];
  const layer2plx = [
    {
      easing: "easeInOutSine",
      end: 400,
      start: 0,
      properties: [
        {
          startValue: 0,
          endValue: 150,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutSine",
      end: ".plxFoo",
      start: 500,
      properties: [
        {
          startValue: 150,
          endValue: 200,
          property: "translateY"
        }
      ]
    }
  ];
  const layer3plx = [
    {
      easing: "easeInOutSine",
      end: 450,
      start: 0,
      properties: [
        {
          startValue: 0,
          endValue: -500,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutCubic",
      end: ".plxFoo",
      start: 450,
      properties: [
        {
          startValue: -500,
          endValue: 200,
          property: "translateY"
        }
      ]
    }
  ];
  return (
    <ParallaxEl>
      <Plx className="PlxEl PlxEl1" parallaxData={layer1plx} />
      <Plx className="PlxEl PlxEl2" parallaxData={layer2plx} />
      <Plx className="PlxEl PlxEl3" parallaxData={layer3plx} />
    </ParallaxEl>
  );
};

Parallax.propTypes = {};

Parallax.defaultProps = {};

export default Parallax;
