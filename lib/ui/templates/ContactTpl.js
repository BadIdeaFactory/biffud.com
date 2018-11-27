import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Action, Icon } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { setSpace } from "ui/mixins";
import { defaultThm } from "ui/themes";
import { SharedHexConsumer } from "ui/contexts";

const ContactHolder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Social = styled.ul`
  ${setSpace("mtl")};
  text-align: left;
`;

const SocialItem = styled.li`
  ${setSpace("mts")};
  i {
    ${setSpace("mrs")};
  }
`;

export default class ContactTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const {
      email,
      facebookid,
      linkedinid,
      twitterid,
      myspaceid,
      githubid
    } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Body>
            <Header>
              <h1 className="hero">{frontmatter.heading}</h1>
              <p className="para">{frontmatter.subheading}</p>
            </Header>
            <ContactHolder>
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
                      <Action button primary obfuscated email={email} />
                      <Social>
                        {twitterid ? (
                          <SocialItem>
                            <Action href={`https://twitter.com/${twitterid}`}>
                              <Icon name="twitter" size="s" />
                              {twitterid}
                            </Action>
                          </SocialItem>
                        ) : null}
                        {githubid ? (
                          <SocialItem>
                            <Action
                              href={`https://github.com/${githubid}`}
                              size="s"
                            >
                              <Icon name="github" />
                              {githubid}
                            </Action>
                          </SocialItem>
                        ) : null}
                        {linkedinid ? (
                          <SocialItem>
                            <Action
                              href={`https://linkedin.com/${linkedinid}`}
                              size="s"
                            >
                              <Icon name="linkedin" />
                              {linkedinid}
                            </Action>
                          </SocialItem>
                        ) : null}
                        {myspaceid ? (
                          <SocialItem>
                            <Action
                              href={`https://myspace.com/${myspaceid}`}
                              size="s"
                            >
                              <Icon name="myspace" />
                              {myspaceid}
                            </Action>
                          </SocialItem>
                        ) : null}
                        {facebookid ? (
                          <SocialItem>
                            <Action
                              href={`https://facebook.com/${facebookid}`}
                              size="s"
                            >
                              <Icon name="facebook" />
                              {facebookid}
                            </Action>
                          </SocialItem>
                        ) : null}
                      </Social>
                    </>
                  </ThemeProvider>
                )}
              </SharedHexConsumer>
            </ContactHolder>
          </Body>
        </Layout>
      </>
    );
  }
}

ContactTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query ContactTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        email
        facebookid
        twitterid
        githubid
      }
    }
  }
`;
