import { graphql, type PageProps } from "gatsby";
import React from "react";

import { Copy, Tile } from "ui/components";
import { Body, Header, Helmet, Layout } from "ui/partials";

const AboutTpl = ({ data, ...props }: PageProps<Queries.AboutTplQuery>) => {
  const { frontmatter, html } = data.markdownRemark ?? {};

  return (
    <>
      <Helmet {...props} title={frontmatter?.title ?? ""} />
      <Layout {...props}>
        <Header>
          <h1 className="hero">{frontmatter?.heading ?? ""}</h1>
          <p className="para">{frontmatter?.subheading ?? ""}</p>
        </Header>
        <Body
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "900px",
          }}
        >
          <Tile space="h">
            <Copy dangerouslySetInnerHTML={{ __html: html ?? "" }} />
          </Tile>
        </Body>
      </Layout>
    </>
  );
};

export default AboutTpl;

export const pageQuery = graphql`
  query AboutTpl($uid: String!) {
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
