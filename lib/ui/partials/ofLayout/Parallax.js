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

  ${breakpoint.phone} {
    .PlxEl {
      background-size: cover;
    }
  }
`;

function Parallax() {
  const layer1plx = [
    {
      easing: "easeInOutSine",
      start: 0,
      end: 1000,
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
      end: 2000,
      start: 1000,
      properties: [
        {
          startValue: -200,
          endValue: 200,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutSine",
      end: 3000,
      start: 2000,
      properties: [
        {
          startValue: 200,
          endValue: 0,
          property: "translateY"
        }
      ]
    }
  ];
  const layer2plx = [
    {
      easing: "easeInOutSine",
      start: 50,
      end: 900,
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
      start: 800,
      end: 1800,
      properties: [
        {
          startValue: 300,
          endValue: -100,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutSine",
      start: 1800,
      end: 3000,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateY"
        }
      ]
    }
  ];
  const layer3plx = [
    {
      easing: "easeInOutSine",
      start: 50,
      end: 700,
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
      start: 700,
      end: 1600,
      properties: [
        {
          startValue: -500,
          endValue: 50,
          property: "translateY"
        }
      ]
    },
    {
      easing: "easeInOutCubic",
      start: 2000,
      end: 3000,
      properties: [
        {
          startValue: 50,
          endValue: 0,
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
}

export default Parallax;
