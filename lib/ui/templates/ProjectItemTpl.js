import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";
import styled from "styled-components";

import {
  Body,
  BodyContent,
  BodyFoot,
  Header,
  Helmet,
  Layout
} from "ui/partials";
import { Action, Copy } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Tagline = styled.div`
  ${setSpace("mbh")};
  ${setType("h")};
  color: ${({ theme }) => theme.titleColor};
  font-style: italic;
  text-align: center;
`;

const Description = styled.div`
  ${setSpace("mbh")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

const Needs = styled.dl``;

const Takeaway = styled.footer`
  text-align: center;
  & > div {
    ${setSpace("mhm")};
    ${setSpace("mvs")};
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
      cover,
      date,
      link,
      needs,
      number,
      source,
      tagline,
      title
    } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <span className="small">From teh BIF portfolol</span>
            <h1 className="hero">{title}</h1>
            <span className="small">{date}</span>
          </Header>
          <Body>
            {cover ? (
              <Img fluid={cover.childImageSharp.fluid} alt={title} />
            ) : null}
            <BodyContent>
              {tagline ? <Tagline>{tagline}</Tagline> : null}
              {html ? (
                <Description>
                  <Copy dangerouslySetInnerHTML={{ __html: html }} />
                </Description>
              ) : null}
              <span>{number}</span>
              {Object.keys(needs).length > 0 ? (
                <Needs>
                  <dt>Needs:</dt>
                  <dd>
                    {Object.keys(needs).map(need => {
                      const dict = {
                        code: "Code",
                        graphic: "Graphic Design",
                        money: "$$$",
                        uiux: "UX / UI Design",
                        users: "Users"
                      };
                      if (needs[need]) {
                        return need !== "other" ? dict[need] : needs[need];
                      }
                      return null;
                    })}
                  </dd>
                </Needs>
              ) : null}

              {source || application ? (
                <Takeaway>
                  {source ? (
                    <div>
                      <Action href={source}>View source</Action>
                    </div>
                  ) : null}
                  {application ? (
                    <div>
                      <Action href={application}>Application</Action>
                    </div>
                  ) : null}
                </Takeaway>
              ) : null}
            </BodyContent>
            <BodyFoot>
              <Takeaway>
                {link ? (
                  <div>
                    <Action button href={link}>
                      Launch project
                    </Action>
                  </div>
                ) : null}
                <div>
                  <Action button href="mailto:no-reply@biffud.com">
                    Donate to support
                  </Action>
                </div>
              </Takeaway>
            </BodyFoot>
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
        uid
        date(formatString: "MMMM YYYY")
        title
        active
        tagline
        application
        link
        source
        number
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
