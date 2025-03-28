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

interface ItemProp {
  readonly $span: boolean
}

const Item = styled.li<ItemProp>`
  height: 100%;
  .quote {
    ${setSpace("mbs")};
    ${setSpace("pal")};
    position: relative;
    &:after,
    &:before {
      color: ${({ theme }) => theme.background};
      ${setType("k")};
      position: absolute;
    }
    &:before {
      content: "“";
      top: 0;
      left: 0;
    }
    &:after {
      content: "”";
      bottom: 0;
      right: 0;
    }
  }
  .source {
    ${setType("s")};
    text-align: right;
  }
  ${breakpoint.phone} {
    &:not(:last-child) {
      ${setSpace("mbx")};
    }
  }
  ${({ $span }) =>
    $span ? `
    grid-column: 1 / span 2;
    grid-row: 1 / 2;
    justify-self: stretch;
    align-self: stretch;
  `
      : ``};
`;

interface TestimonialsProps {
  testimonials: {
    source: string;
    text: string;
    span: boolean;
  }[];
  subtitle?: string;
  title?: string;
}

function Testimonials(props: TestimonialsProps) {
  const { testimonials, title, subtitle } = props;

  return (
    <Element as="section">
      <div className="el">
        <Header className="hd">
          <Title className="hero">{title}</Title>
          {subtitle ? <p className="para">{subtitle}</p> : null}
        </Header>
        <Items>
          {testimonials.map((testimonial, i) => (
            <Item key={i} $span={testimonial.span}>
              <Tile>
                <blockquote className="quote">
                  <p>{testimonial.text}</p>
                </blockquote>
                <p className="source">— {testimonial.source}</p>
              </Tile>
            </Item>
          ))}
        </Items>
      </div>
    </Element>
  );
}

export default Testimonials;
