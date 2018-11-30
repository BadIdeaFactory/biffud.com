import { array, string } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Element = styled(Section)``;

const Clients = props => {
  const { clients, title, subtitle } = props;
  return (
    <Element as="section">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {clients.map(({ node }) => {
        const client = node.frontmatter;
        return (
          <>
            <a href={client.link} target="_blank">
              <Img
                fixed={client.logo.childImageSharp.fixed}
                alt={client.name}
              />
            </a>
          </>
        );
      })}
    </Element>
  );
};

Clients.propTypes = {
  clients: array.isRequired,
  subtitle: string.isRequired,
  title: string.isRequired
};

export default Clients;
