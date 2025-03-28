import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { Header } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { Tile } from "ui/components";
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
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    & > * {
      grid-row-end: span 1;
    }
  }
  ${breakpoint.desktopUp} {
    grid-template-columns: repeat(auto-fill, minmax(221px, 1fr));
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
  ${setType("l")};
  font-weight: 800;
`;

interface ServicesProps {
  services: {
    title: string;
    text: string;
  }[];
  subtitle?: string;
  title?: string;
}

function Services(props: ServicesProps) {
  const { services, title, subtitle } = props;

  return (
    <Element as="section">
      <div className="el">
        <Header className="hd">
          <Title className="hero">{title}</Title>
          {subtitle ? <p className="para">{subtitle}</p> : null}
        </Header>
        <Items>
          {services.map((service, i) => (
            <Item key={i}>
              <Tile space="l">
                <ItemTitle className="TileTitle">{service.title}</ItemTitle>
                <p>{service.text}</p>
              </Tile>
            </Item>
          ))}
        </Items>
      </div>
    </Element>
  );
}

export default Services;
