import { array, string } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Tile } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";
import Section from "./Section";

const Element = styled(Section)``;
const Items = styled.ul`
  width: 100%;
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 3px;
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
        <div className="hd">
          <h1 className="title">{title}</h1>
          {subtitle ? <p className="subtitle">{subtitle}</p> : null}
        </div>
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
