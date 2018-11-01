import { object, shape } from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Tabs, Tab } from "ui/components";
import { Body, BodyHead, Header, Helmet, Layout } from "ui/partials";
import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";
import Member from "./ofPeople/Member";

const MembersSection = styled.div`
  ${setSpace("pah")};
  background: white;
`;

const Members = styled.ul`
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class PeopleTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "overlords"
    };
    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(tab) {
    this.setState({ tab });
  }

  render() {
    const { overlords, members, minions } = this.props.data;
    const { tab } = this.state;
    const displayTabbedContent = () => {
      switch (tab) {
        case "overlords":
        default:
          return (
            <>
              <Members>
                {overlords.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </>
          );
        case "minions":
          return (
            <>
              <Members>
                {minions.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </>
          );
        case "members":
          return (
            <>
              <Members>
                {members.edges.map(({ node }) => (
                  <Member data={node} />
                ))}
              </Members>
            </>
          );
      }
    };
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
            <Tabs count={3}>
              <Tab
                handleClick={() => this.switchTab("overlords")}
                href="#overlords"
                isActive={tab === "overlords"}
              >
                Overlords
              </Tab>
              <Tab
                handleClick={() => this.switchTab("members")}
                href="#members"
                isActive={tab === "members"}
              >
                Members
              </Tab>
              <Tab
                handleClick={() => this.switchTab("minions")}
                href="#minions"
                isActive={tab === "minions"}
              >
                Minions
              </Tab>
            </Tabs>
            <MembersSection>{displayTabbedContent()}</MembersSection>
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
