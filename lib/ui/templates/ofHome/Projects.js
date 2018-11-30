import { array } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Element = styled(Section)``;

const Projects = props => {
  const { projects } = props;
  return (
    <Element as="section">
      <h1 className="title">Projects</h1>
      <p className="subtitle">A subtitle if you fancy</p>
      {projects.map(({ node }) => {
        const project = node.frontmatter;
        return (
          <>
            {project.cover ? (
              <Img
                fluid={project.cover.childImageSharp.fluid}
                alt={project.title}
              />
            ) : null}
          </>
        );
      })}
    </Element>
  );
};

Projects.propTypes = {
  projects: array.isRequired
};

export default Projects;
