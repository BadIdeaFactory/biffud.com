import React, { useState } from "react";
import { graphql, type PageProps } from "gatsby";
import styled from "styled-components";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Tabs, Tab, Tile } from "ui/components";
import { setSpace } from "ui/mixins";

interface QuestionsProps {
  readonly $isActive: boolean;
}

const Questions = styled(Tile)<QuestionsProps>`
  ${setSpace("pah")};
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
`;

type TabState = "partnership" | "membership";

const FAQListingTpl = (props: PageProps<Queries.FAQListingTplQuery>) => {
  const [tab, setTab] = useState<TabState>("partnership");

  function switchTab(tab: TabState) {
    setTab(tab);
  }

  const { frontmatter } = props.data.markdownRemark ?? {};
  const membershipQuestions = props.data.membership.edges[0].node.html ?? "";
  const partnershipQuestions = props.data.partnership.edges[0].node.html ?? "";

  return (
    <>
      <Helmet {...props} title="Frequently Asked Questions" />
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
          <Tabs count={2}>
            <Tab
              handleClick={() => switchTab("partnership")}
              isActive={tab === "partnership"}
            >
              {frontmatter?.partnershipTab ?? ""}
            </Tab>
            <Tab
              handleClick={() => switchTab("membership")}
              isActive={tab === "membership"}
            >
              {frontmatter?.membershipTab ?? ""}
            </Tab>
          </Tabs>
          <Questions $isActive={tab === "partnership"}>
            <Copy dangerouslySetInnerHTML={{ __html: partnershipQuestions }} />
          </Questions>
          <Questions $isActive={tab === "membership"}>
            <Copy dangerouslySetInnerHTML={{ __html: membershipQuestions }} />
          </Questions>
        </Body>
      </Layout>
    </>
  );
};

export default FAQListingTpl;

export const pageQuery = graphql`
  query FAQListingTpl($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        subheading
        membershipTab
        partnershipTab
      }
    }
    membership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/membership/*/.*/*.md/" }
      }
      sort: { frontmatter: { score: ASC } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    partnership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/partnership/*/.*/*.md/" }
      }
      sort: { frontmatter: { score: DESC } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;
