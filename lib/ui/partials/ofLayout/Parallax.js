import Plx from "react-plx";
import React from "react";
import styled from "styled-components";

import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";

const ParallaxEl = styled.div``;

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
      <Plx className="HeroParallax" parallaxData={layer1plx}>
        <img src={scatteredBif1} alt="" aria-hidden="true" width="100%" />
      </Plx>
      <Plx className="HeroParallax" parallaxData={layer2plx}>
        <img src={scatteredBif2} alt="" aria-hidden="true" width="100%" />
      </Plx>
      <Plx className="HeroParallax" parallaxData={layer3plx}>
        <img src={scatteredBif3} alt="" aria-hidden="true" width="100%" />
      </Plx>
    </ParallaxEl>
  );
};

Parallax.propTypes = {};

Parallax.defaultProps = {};

export default Parallax;
