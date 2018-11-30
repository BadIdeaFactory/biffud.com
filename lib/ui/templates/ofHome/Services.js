import { array, string } from "prop-types";
import React from "react";
import styled from "styled-components";

import { Tile } from "ui/components";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import Section from "./Section";

const Element = styled(Section)``;
const Items = styled.ul`
  width: 100%;
  ${breakpoint.tabletUp} {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
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
  ${setType("m")};
  font-weight: 800;
`;

const Services = props => {
  const { services, title, subtitle } = props;
  return (
    <Element as="section">
      <div className="el">
        <div className="hd">
          <h1 className="title">{title}</h1>
          {subtitle ? <p className="subtitle">{subtitle}</p> : null}
        </div>
        <Items>
          {services.map((service, i) => (
            <Item key={i}>
              <Tile>
                <ItemTitle className="TileTitle">{service.title}</ItemTitle>
                <p>{service.text}</p>
              </Tile>
            </Item>
          ))}
        </Items>
      </div>
    </Element>
  );
};

Services.propTypes = {
  services: array.isRequired,
  subtitle: string.isRequired,
  title: string.isRequired
};

export default Services;
