import React, { Component } from "react";

import { Copy } from "ui/components";
import {
  Body,
  BodyContent,
  BodyFoot,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";

export default class AboutTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet {...this.props} title="About the company" />
        <Layout {...this.props}>
          <Header>
            <h1>About</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>Our Mission Statement title</h1>
              <p>Our mission statement paragraph</p>
            </BodyHead>
            <BodyContent>
              <Copy>
                <h2>
                  Our Mottos and Taglines as per{" "}
                  <a href="https://trello.com/c/S9GnuilA">this trello card</a>.
                </h2>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </li>
                  <li>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </li>
                </ul>
                <h2>Our history</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h2>Our bylaws</h2>
                <p>
                  Our Bylaws (links to the six sections with short descriptions)
                </p>
                <ul>
                  <li>
                    <a href="https://github.com/BadIdeaFactory/corporate/blob/master/documents/operating.md#section-1--official-operating-agreement-">
                      Official Operating Agreement
                    </a>{" "}
                    — Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </li>
                </ul>
              </Copy>
            </BodyContent>
            <BodyFoot />
          </Body>
        </Layout>
      </>
    );
  }
}

AboutTpl.propTypes = {};
