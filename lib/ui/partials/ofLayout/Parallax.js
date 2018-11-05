import Plx from "react-plx";
import React from "react";
import styled from "styled-components";

import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";
import {} from "ui/animations";
import { breakpoint } from "ui/settings";

const ParallaxEl = styled.div`
  bottom: 0;
  left: 0;
  overflow: visible;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  .PlxEl {
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
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

  ${breakpoint.phone} {
    .PlxEl {
      background-size: cover;
    }
  }
`;

const Parallax = () => {
  const layer1plx = [
    {
      easing: "easeInOutSine",
      start: 0,
      end: 200,
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
      start: 300,
      properties: [
        {
          startValue: -200,
          endValue: 0,
          property: "translateY"
        }
      ]
    }
  ];
  const layer2plx = [
    {
      easing: "easeInOutSine",
      start: 0,
      end: 200,
      properties: [
        {
          startValue: 0,
          endValue: 300,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutSine",
      start: 300,
      end: ".plxFoo",
      properties: [
        {
          startValue: 300,
          endValue: 0,
          property: "translateY"
        }
      ]
    }
  ];
  const layer3plx = [
    {
      easing: "easeInOutSine",
      start: 0,
      end: 200,
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
      start: 300,
      end: ".plxFoo",
      properties: [
        {
          startValue: -500,
          endValue: 50,
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
