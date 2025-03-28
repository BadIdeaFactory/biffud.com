import { Link } from "gatsby";
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { Header } from "ui/partials";
import { setSpace, setType } from "ui/mixins";
import { Tile, Icon } from "ui/components";
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
    grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
  ${breakpoint.desktopUp} {
    grid-template-columns: repeat(auto-fill, minmax(291px, 1fr));
  }
`;
const Item = styled.li`
  ${breakpoint.phone} {
    &:not(:last-child) {
      ${setSpace("mbx")};
    }
  }
`;

interface ItemImageProps {
  readonly $hasPlaceholder: boolean;
}

const ItemImage = styled.div<ItemImageProps>`
  ${setSpace("mbm")};
  border: 2px solid ${({ theme }) => theme.actionColor};
  position: relative;
  ${({ $hasPlaceholder, theme }) =>
    $hasPlaceholder
      ? `
    .thinking {
      color: ${theme.actionColor};
      display: inline-block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      i {
        font-size: 80px !important;
      }
  `
      : ``};
`;
const ItemTitle = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  h3,
  span {
    ${setType("m")};
    color: ${({ theme }) => theme.actionColor};
    font-weight: 800;
    text-transform: uppercase;
  }
  h3 {
    max-width: 75%;
  }
  span {
    display: none;
  }
  ${breakpoint.desktopUp} {
    span {
      display: inline-block;
    }
  }
`;
const ItemText = styled.p`
  ${setSpace("mts")};
`;

interface ProjectsProps {
  placeholder: IGatsbyImageData;
  projects: ProjectList;
  subtitle: string;
  title: string;
}

function Projects(props: ProjectsProps) {
  const { projects, title, subtitle } = props;
  return (
    <Element as="section">
      <div className="el">
        <Header className="hd">
          <Title className="hero">{title}</Title>
          {subtitle ? <p className="para">{subtitle}</p> : null}
        </Header>
        <Items>
          {projects.map(({ node }) => {
            const project = node.frontmatter;

            if (project === null) {
              return null;
            }

            return (
              <Item key={node.id}>
                <Tile as={Link} to={`/projects/${project.uid}`}>
                  <ItemImage $hasPlaceholder={!project.cover}>
                    <GatsbyImage
                      image={
                        project.cover?.childImageSharp?.gatsbyImageData
                          ? project.cover.childImageSharp.gatsbyImageData
                          : props.placeholder
                      }
                      alt={project.title ?? ""}
                    />
                    {!project.cover ? (
                      <span className="thinking">
                        <Icon name="thinking" />
                      </span>
                    ) : null}
                  </ItemImage>
                  <ItemTitle>
                    <h3 className="title">{project.title}</h3>
                    <span>
                      <Icon name="arrow-right" text="Read more…" />
                    </span>
                  </ItemTitle>
                  <ItemText>{project.tagline}</ItemText>
                </Tile>
              </Item>
            );
          })}
        </Items>
      </div>
    </Element>
  );
}

export default Projects;
