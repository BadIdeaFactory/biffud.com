import { array, string } from "prop-types";
import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Element = styled(Section)``;

const Services = props => {
  const { services, title, subtitle } = props;
  return (
    <Element as="section">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {services.map(service => {
        const { title, text } = service;
        return null;
      })}
    </Element>
  );
};

Services.propTypes = {};

export default Services;
