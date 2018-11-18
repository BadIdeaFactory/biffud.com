import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import { Body, BodyContent, Header, Helmet, Layout } from "ui/partials";
import { Actionbar, Action, Icon } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Flex = styled.div`
  ${breakpoint.tabletUp} {
    display: flex;
    & div.sideA,
    & div.sideB {
      flex: 0 0 50%;
      width: 100%;
    }
    & div.sideA {
      ${setSpace("prl")};
    }
    & div.sideB {
      ${setSpace("pll")};
    }
  }
`;

const BodyHd = styled(Flex)`
  ${setSpace("mbl")};
  ${breakpoint.tabletUp} {
    display: flex;
    & div.sideB {
      display: flex;
    }
    & div.time,
    & div.code {
      flex: 0 0 50%;
    }
  }
`;

const BodyBd = styled(Flex)`
  ${setSpace("mvl")};
  a {
    color: ${({ theme }) => theme.actionColor};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const BodyFt = styled.div`
  ${setSpace("mth")};
  ${setType("s")};
`;

const Label = styled.h2`
  ${setSpace("mbs")};
  ${setType("s")};
  color: ${({ theme }) => theme.dimmedColor};
`;

const Name = styled.p`
  ${setType("h")};
  font-weight: 900;
  color: ${({ theme }) => theme.titleColor};
  text-transform: uppercase;
`;

const Tagline = styled.p`
  ${setSpace("mbl")};
  ${setType("l")};
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor};
`;

const Description = styled.div`
  color: ${({ theme }) => theme.titleColor};
  p {
    &:not(:last-child) {
      ${setSpace("mbm")};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
  }
  a {
    color: ${({ theme }) => theme.actionColor};
    text-decoration: underline;
  }
  em {
    font-style: italic;
  }
  strong {
    color: ${({ theme }) => theme.titleColor};
    font-weight: 600;
  }
  ul,
  ol {
    ${setType("s")};
  }
  ul li:before {
    ${setSpace("mrs")};
    color: ${({ theme }) => theme.color};
    content: "–";
    display: inline-block;
  }
  ol li {
    list-style: decimal;
  }
`;

const Cover = styled.div`
  ${setSpace("mbl")};
  border: 2px solid ${({ theme }) => theme.actionColor};
`;

const Meta = styled.p`
  ${setType("s")};
  color: ${({ theme }) => theme.titleColor};
  font-weight: 700;
  text-transform: uppercase;
`;

const List = styled.ul`
  li:before {
    ${setSpace("mrs")};
    color: ${({ theme }) => theme.color};
    content: "–";
    display: inline-block;
  }
`;

export default class ProjectItemTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const portfolioItem = this.props.data.markdownRemark;
    const { frontmatter, html } = portfolioItem;
    const {
      application,
      bifpresents,
      cover,
      date,
      link,
      needs,
      code,
      source,
      tagline,
      timeframe,
      title
    } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <span className="small">BIFFUD Presents</span>
            <h1 className="hero">{bifpresents}</h1>
            <span className="small">{date}</span>
          </Header>
          <Body>
            <BodyContent>
              <BodyHd>
                <div className="sideA">
                  <div className="name">
                    <Label>Project name</Label>
                    <Name>{title}</Name>
                  </div>
                </div>
                <div className="sideB">
                  <div className="time">
                    <Label>Timeframe</Label>
                    <Meta>{timeframe}</Meta>
                  </div>
                  <div className="code">
                    <Label>Code</Label>
                    <Meta>{code}</Meta>
                  </div>
                </div>
              </BodyHd>
              <BodyBd>
                <div className="sideA">
                  <Label>Tagline</Label>
                  <Tagline>{tagline}</Tagline>
                  <Label>Description</Label>
                  <Description dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <div className="sideB">
                  <Label>Proofs</Label>
                  {cover ? (
                    <Cover>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Cover>
                  ) : null}
                  <Flex>
                    {source || application ? (
                      <div className="sideB" style={{ padding: "0" }}>
                        <Label>More Proofs</Label>
                        <List>
                          {source ? (
                            <li>
                              <a href={source}>Source code</a>{" "}
                              <Icon name="popout" />
                            </li>
                          ) : null}
                          {application ? (
                            <li>
                              <a href={application}>Application</a>{" "}
                              <Icon name="popout" />
                            </li>
                          ) : null}
                        </List>
                      </div>
                    ) : null}
                    {Object.keys(needs).length > 0 ? (
                      <div className="sideB" style={{ padding: "0" }}>
                        <Label>Needs</Label>
                        <List>
                          {Object.keys(needs).map(need => {
                            const dict = {
                              code: "Code",
                              graphic: "Graphic Design",
                              money: "$$$",
                              uiux: "UX / UI Design",
                              users: "Users"
                            };
                            if (needs[need]) {
                              return (
                                <li>
                                  <Icon name="emoji" />{" "}
                                  {need !== "other" ? dict[need] : needs[need]}
                                </li>
                              );
                            }
                            return null;
                          })}
                        </List>
                      </div>
                    ) : null}
                  </Flex>
                </div>
              </BodyBd>
              <BodyFt>
                <Actionbar>
                  {link ? (
                    <div>
                      <Action button primary href={link}>
                        Launch project
                      </Action>
                    </div>
                  ) : null}
                  <div>
                    <Action href="mailto:no-reply@biffud.com">
                      Donate to support
                    </Action>
                  </div>
                </Actionbar>
              </BodyFt>
            </BodyContent>
          </Body>
        </Layout>
      </>
    );
  }
}

ProjectItemTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query PortfolioItemsByUID($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        active
        application
        bifpresents
        date(formatString: "MMM YYYY")
        link
        code
        source
        tagline
        timeframe
        title
        uid
        needs {
          code
          graphic
          money
          uiux
          users
          other
        }
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1000
              quality: 90
              traceSVG: { color: "lightgray" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
