import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Action, Actionbar } from "ui/components";
import { Helmet, Layout, Pitch } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, track } from "ui/settings";

const Services = styled.section`
  ${setSpace("mtk")};
`;

const ServicesIntro = styled.div`
  ${setSpace("mbh")};
  text-align: center;
  h2 {
    ${setSpace("mbm")};
    ${setSpace("phs")};
    ${setSpace("pvx")};
    ${setType("s")};
    background: white;
    color: ${({ theme }) => theme.background};
    display: inline-block;
    font-weight: 800;
    letter-spacing: ${track.m};
    text-transform: uppercase;
  }
  p {
    ${setType("l")};
    color: white;
  }
`;

const ServicesList = styled.ul`
  color: ${({ theme }) => theme.color};
  ${breakpoint.tabletUp} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Service = styled.li`
  ${setSpace("prl")};
  &:not(:last-child) {
    ${setSpace("mbl")}
  }
  ${breakpoint.tabletUp} {
    flex: 0 0 50%;
  }
  ${breakpoint.desktopUp} {
    flex: 0 0 25%;
  }
  h3 {
    color: ${({ theme }) => theme.color};
    ${setSpace("mbs")};
    ${setType("l")};
    font-weight: 800;
  }
  p {
    color: ${({ theme }) => theme.color};
    font-weight: 300;
  }
`;

export default class HomeTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <>
        <Helmet {...this.props} title={frontmatter.title} />
        <Layout {...this.props}>
          <Pitch>
            <h1 className="hero">{frontmatter.heading}</h1>
            <Actionbar>
              <Action button to="/projects">
                {frontmatter.projectsCta}
              </Action>
              <Action to="/contact">{frontmatter.contactCta}</Action>
            </Actionbar>
          </Pitch>
          <Services>
            <ServicesIntro>
              <h2>{frontmatter.servicesTitle}</h2>
              <p>{frontmatter.servicesIntro}</p>
            </ServicesIntro>
            <ServicesList>
              <Service>
                <h3>{frontmatter.service1Title}</h3>
                <p>{frontmatter.service1Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service2Title}</h3>
                <p>{frontmatter.service2Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service3Title}</h3>
                <p>{frontmatter.service3Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.service4Title}</h3>
                <p>{frontmatter.service4Text}</p>
              </Service>
            </ServicesList>
          </Services>
          <Services space>
            <ServicesIntro>
              <h2>{frontmatter.goodatTitle}</h2>
              <p>{frontmatter.goodatIntro}</p>
            </ServicesIntro>
            <ServicesList>
              <Service>
                <h3>{frontmatter.goodat1Title}</h3>
                <p>{frontmatter.goodat1Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat2Title}</h3>
                <p>{frontmatter.goodat2Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat3Title}</h3>
                <p>{frontmatter.goodat3Text}</p>
              </Service>
              <Service>
                <h3>{frontmatter.goodat4Title}</h3>
                <p>{frontmatter.goodat4Text}</p>
              </Service>
            </ServicesList>
          </Services>
        </Layout>
      </>
    );
  }
}

HomeTpl.propTypes = {
  data: shape({
    markdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query HomeTplQuery($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        title
        heading
        contactCta
        projectsCta
        servicesTitle
        servicesIntro
        service1Title
        service1Text
        service2Title
        service2Text
        service3Title
        service3Text
        service4Title
        service4Text
        goodatTitle
        goodatIntro
        goodat1Title
        goodat1Text
        goodat2Title
        goodat2Text
        goodat3Title
        goodat3Text
        goodat4Title
        goodat4Text
      }
    }
  }
`;
