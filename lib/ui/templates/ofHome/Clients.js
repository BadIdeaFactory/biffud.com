import { array } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Element = styled(Section)``;

const Clients = props => {
  const { clients } = props;
  return (
    <Element as="section">
      <h1 className="title">Clients</h1>
      <p className="subtitle">A subtitle if you fancy</p>
      {clients.map(client => {
        const { link, logo, name } = client.node.frontmatter;
        return <Img fixed={logo.childImageSharp.fixed} alt={name} />;
      })}
    </Element>
  );
};

Clients.propTypes = {
  clients: array.isRequired
};

export default Clients;
