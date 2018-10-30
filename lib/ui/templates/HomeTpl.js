import React, { Component } from "react";
import styled from "styled-components";

import { Body, Helmet, Layout } from "ui/partials";
import { Action, Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { breakpoint } from "ui/settings";

const Pitch = styled.header`
  ${setSpace("mbh")};
  ${setSpace("pbh")};
  ${setType("s")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;
  text-align: left;
  h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
`;

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="Hello sheep" />
        <Layout {...this.props}>
          <Pitch>
            <h1>
              Bad Idea Factory is a collective of chaotic creatives using
              technology to make people thinking face emoji. We have been
              working in this space for hundreds of thousands of years.
            </h1>
            <Actionbar>
              <Action button to="/projects">
                See our work
              </Action>
              <Action to="/contact">Get in touch</Action>
            </Actionbar>
          </Pitch>
          <Body>Some body</Body>
        </Layout>
      </>
    );
  }
}

HomeTpl.propTypes = {};
