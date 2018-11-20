import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Icon } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import { defaultThm } from "ui/themes";
import { SharedHexConsumer } from "ui/contexts";

const EmojiHolder = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  text-align: center;
  ${breakpoint.phone} {
    ${setSpace("pvh")};
  }
  i {
    ${setSpace("mbl")};
    color: ${({ theme }) => theme.actionColor};
    display: inline-block;
    font-size: 256px;
    height: 256px;
    line-height: 256px;
    width: 256px;
  }
  h1 {
    ${setType("l")};
    color: ${({ theme }) => theme.titleColor};
    font-weight: 900;
  }
  h2 {
    font-size: 36px;
    color: ${({ theme }) => theme.actionColor};
    font-weight: 900;
  }
`;

export default class EmojiTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Body>
            <Header>
              <h1 className="hero">{frontmatter.heading}</h1>
              <p className="para">{frontmatter.subheading}</p>
            </Header>
            <SharedHexConsumer>
              {({ BIFHEX }) => (
                <ThemeProvider
                  theme={{
                    ...defaultThm,
                    background: BIFHEX,
                    actionColor: "white",
                    decor: "white"
                  }}
                >
                  <>
                    <EmojiHolder>
                      <Icon name="thinking" className="emoji" />
                      <h2 className="name">:thinkingface:</h2>
                    </EmojiHolder>
                  </>
                </ThemeProvider>
              )}
            </SharedHexConsumer>
          </Body>
        </Layout>
      </>
    );
  }
}

EmojiTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query EmojiTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
      }
    }
  }
`;
