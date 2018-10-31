import React, { Component } from "react";
import styled from "styled-components";

import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";
import { color, font } from "ui/settings";
import { setType } from "ui/mixins";

const Sample = styled.div`
  font-family: ${font.sans};
  overflow: hidden;
  position: relative;
  h1,
  p,
  span {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
  }
  .PlxEl {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
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
  h1 {
    ${setType("h")};
    font-weight: 900;
    font-style: italic;
  }
  span {
    position: relative;
    z-index: 100;
    ${setType("s")};
  }
  p {
    ${setType("m")};
  }
`;

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hexArray } = color;
    return (
      <>
        {hexArray.map((color, i) => (
          <Sample
            key={i}
            style={{
              background: color,
              color: "white",
              padding: "100px",
              fontWeight: "bold"
            }}
          >
            <div className="PlxEl PlxEl1" />
            <div className="PlxEl PlxEl2" />
            <div className="PlxEl PlxEl3" />
            <span>{color}</span>
            <h1>
              Bad Idea Factory is a collective of chaotic creatives using
              technology to make people thinking face emoji. We have been
              working in this space for hundreds of thousands of years.
            </h1>
            <p>
              Bad Idea Factory is a collective of chaotic creatives using
              technology to make people thinking face emoji. We have been
              working in this space for hundreds of thousands of years.
            </p>
          </Sample>
        ))}
      </>
    );
  }
}

Playground.propTypes = {};
