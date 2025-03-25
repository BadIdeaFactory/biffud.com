import React from "react";
import { graphql, type PageProps } from "gatsby";
import styled from "styled-components";

import { Action, Icon, Tile } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";
import { setSpace } from "ui/mixins";

const ContactHolder = styled(Tile)`
  ${setSpace("pah")};
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
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

const ContactTpl = ({ data, ...props }: PageProps<Queries.ContactTplQuery>) => {
  const { frontmatter } = data.markdownRemark ?? {};
  const { title, heading, subheading, email, facebookid, twitterid, githubid } =
    frontmatter ?? {};

  return (
    <>
      <Helmet {...props} title={title ?? ""} />
      <Layout {...props}>
        <Body>
          <Header>
            <h1 className="hero">{heading}</h1>
            <p className="para">{subheading}</p>
          </Header>
          <ContactHolder>
            <Action button obfuscated email={email} />
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
                  <Action href={`https://github.com/${githubid}`} size="s">
                    <Icon name="github" />
                    {githubid}
                  </Action>
                </SocialItem>
              ) : null}
              {facebookid ? (
                <SocialItem>
                  <Action href={`https://facebook.com/${facebookid}`} size="s">
                    <Icon name="facebook" />
                    {facebookid}
                  </Action>
                </SocialItem>
              ) : null}
            </Social>
          </ContactHolder>
        </Body>
      </Layout>
    </>
  );
};

export default ContactTpl;

export const pageQuery = graphql`
  query ContactTpl($uid: String!) {
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
