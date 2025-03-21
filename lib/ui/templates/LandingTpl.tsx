import React from "react";
import { graphql, type PageProps } from "gatsby";

import { Actionbar, Action, Copy, Tile } from "ui/components";
import { Body, Pitch, Helmet, Layout } from "ui/partials";

const LandingTpl = (props: PageProps<Queries.LandingTplQuery>) => {
  const { frontmatter, html } = props.data.markdownRemark ?? {};

  return (
    <>
      <Helmet {...props} title={frontmatter?.title ?? ""} />
      <Layout {...props}>
        <Pitch>
          <h1 className="hero">{frontmatter?.heading}</h1>
          <Actionbar>
            <Action button to="/projects">
              {frontmatter?.projectsCta}
            </Action>
            <Action to="/contact">{frontmatter?.contactCta}</Action>
          </Actionbar>
        </Pitch>
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

export default LandingTpl;

export const pageQuery = graphql`
  query LandingTpl($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        contactCta
        projectsCta
      }
    }
  }
`;
