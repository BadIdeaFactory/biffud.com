import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { Body, BodyHead, Header, Helmet, Layout } from "ui/partials";
import Member from "./ofPeople/Member";

const MembersSection = styled.section`
  & > h2 {
  }
`;

const Members = styled.ul`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { advisors, corporate, elected, members, minions } = this.props.data;
    return (
      <>
        <Helmet {...this.props} title="Team members" />
        <Layout {...this.props}>
          <Header>
            <h1>Members</h1>
          </Header>
          <Body>
            <BodyHead>
              <h1>All teh peoplez</h1>
              <p>BIF IS MADE OF ALL THESE PPL</p>
            </BodyHead>
            <MembersSection>
              <h2>Elected overloards</h2>
              <Members>
                {elected.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </MembersSection>
            <MembersSection>
              <h2>Advisors</h2>
              <Members>
                {advisors.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </MembersSection>
            <MembersSection>
              <h2>Corporate overlords</h2>
              <Members>
                {corporate.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </MembersSection>
            <MembersSection>
              <h2>Members</h2>
              <Members>
                {members.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </MembersSection>
            <MembersSection>
              <h2>Minions</h2>
              <Members>
                {minions.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </MembersSection>
          </Body>
        </Layout>
      </>
    );
  }
}

PeopleTpl.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};
