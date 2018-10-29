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
        },
        {
          startValue: 0,
          endValue: -5,
          property: "rotate"
        }
      ]
    },
    {
      easing: "easeInOutCubic",
      end: ".plxFoo",
      start: 500,
      properties: [
        {
          startValue: -200,
          endValue: 400,
          property: "translateY"
        },
        {
          startValue: -5,
          endValue: 180,
          property: "rotate"
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
          endValue: 300,
          property: "translateY"
        },
        {
          startValue: 0,
          endValue: -5,
          property: "rotate"
        }
      ]
    },
    {
      easing: "easeInOutCubic",
      end: ".plxFoo",
      start: 400,
      properties: [
        {
          startValue: 300,
          endValue: 400,
          property: "translateY"
        },
        {
          startValue: -5,
          endValue: -190,
          property: "rotate"
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
        },
        {
          startValue: 0,
          endValue: 3,
          property: "rotate"
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
          endValue: 500,
          property: "translateY"
        },
        {
          startValue: 3,
          endValue: -180,
          property: "rotate"
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
