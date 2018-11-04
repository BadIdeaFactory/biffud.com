import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";

import {
  Body,
  BodyContent,
  BodyFoot,
  BodyHead,
  Header,
  Helmet,
  Layout
} from "ui/partials";
import { Copy } from "ui/components";

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
      source,
      tagline,
      title
    } = frontmatter;
    return (
      <>
        <Helmet {...this.props} title={title} />
        <Layout {...this.props}>
          <Header>
            <h1>Portfolol</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
              <p>{date}</p>
            </BodyHead>
            <Img fluid={cover.childImageSharp.fluid} alt={title} />
            <BodyContent limit>
              <dl>
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
              </dl>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </BodyContent>
            <BodyFoot>
              <p>
                <a href={source}>Source</a>
              </p>
              <p>
                <a href={link}>Link</a>
              </p>
              <p>
                <a href={application}>Application</a>
              </p>
              <p>
                <a href="#">Donate</a>
              </p>
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
        date(formatString: "MMMM DD, YYYY")
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
              maxWidth: 400
              maxHeight: 300
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
