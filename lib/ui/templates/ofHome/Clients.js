import { array, string } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Tile } from "ui/components";
import { Header } from "ui/partials";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import Section from "./Section";

const Element = styled(Section)``;
const Title = styled.h1`
  &.hero {
    ${setType("h")};
  }
`;
const Items = styled.ul`
  width: 100%;
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    & > * {
      grid-row-end: span 1;
    }
  }
`;
const Item = styled.li`
  ${breakpoint.phone} {
    &:not(:last-child) {
      ${setSpace("mbx")};
    }
  }
  ${breakpoint.tabletUp} {
    &:nth-child(even) {
      transform: translateY(30px);
    }
  }
`;
const ItemTitle = styled.h3`
  ${setSpace("mbm")};
`;
const ItemText = styled.div`
  color: ${({ theme }) => theme.color};
  strong {
    font-weight: 600;
  }
`;

const Clients = props => {
  const { clients, title, subtitle } = props;
  return (
    <Element as="section">
      <div className="el">
        <Header className="hd">
          <Title className="hero">{title}</Title>
          {subtitle ? <p className="para">{subtitle}</p> : null}
        </Header>
        <Items>
          {clients.map(({ node }) => {
            const client = node.frontmatter;
            return (
              <Item key={node.uid}>
                <Tile href={client.link} target="_blank" as="a">
                  <ItemTitle>
                    <Img
                      fixed={client.logo.childImageSharp.fixed}
                      alt={client.name}
                    />
                  </ItemTitle>
                  <ItemText dangerouslySetInnerHTML={{ __html: node.html }} />
                </Tile>
              </Item>
            );
          })}
        </Items>
      </div>
    </Element>
  );
};

Clients.propTypes = {
  clients: array.isRequired,
  subtitle: string.isRequired,
  title: string.isRequired
};

export default Clients;
