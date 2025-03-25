import React from "react";
import { graphql, type PageProps } from "gatsby";
import styled from "styled-components";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Icon, Tile } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const EmojiHolder = styled(Tile)`
  ${setSpace("pak")};
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
    font-size: 240px;
    height: 240px;
    line-height: 240px;
    width: 240px;
    ${breakpoint.phone} {
      font-size: 200px;
      height: 200px;
      line-height: 200px;
      width: 200px;
    }
  }
  h2 {
    font-size: 36px;
    color: ${({ theme }) => theme.actionColor};
    font-weight: 800;
    ${breakpoint.phone} {
      font-size: 26px;
    }
  }
`;

const EmojiTpl = ({ data, ...props }: PageProps<Queries.EmojiTplQuery>) => {
  const { frontmatter } = data.markdownRemark ?? {};
  const { title, heading, subheading } = frontmatter ?? {};

  return (
    <>
      <Helmet {...props} title={title ?? ""} />
      <Layout {...props}>
        <Body>
          <Header>
            <h1 className="hero">{heading}</h1>
            <p className="para">{subheading}</p>
          </Header>
          <EmojiHolder>
            <Icon name="thinking" />
            <h2 className="name">:thinkingface:</h2>
          </EmojiHolder>
        </Body>
      </Layout>
    </>
  );
};

export default EmojiTpl;

export const pageQuery = graphql`
  query EmojiTpl($uid: String!) {
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
