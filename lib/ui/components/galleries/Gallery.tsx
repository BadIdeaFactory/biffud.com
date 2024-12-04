import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";

import { time } from "../../settings";

const Image = styled.div`
  background: ${({ theme }) => theme.actionColor};
  border: 2px solid ${({ theme }) => theme.actionColor};
`;

const Thumbs = styled.ol`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  margin-top: 10px;
`;

const Thumb = styled.li`
  border: 2px solid ${({ theme }) => theme.actionColor};
  cursor: pointer;
  grid-row-end: span 1;
  transition:
    box-shadow ${time.s},
    transform ${time.s};
  &:hover {
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.actionDecor};
    transform: translate(-1px, -1px);
  }
`;

interface GalleryProps {
  images?: GatsbyImageProps["image"][];
  defaultImage: GatsbyImageProps["image"];
}

const Gallery: React.FC<GalleryProps> = ({ images, defaultImage }) => {
  const [current, setCurrent] = useState(0);

  if (images && images.length > 0) {
    return (
      <>
        <Image>
          <GatsbyImage image={images[current]} alt="" />
        </Image>
        <Thumbs>
          {images.length > 1
            ? images.map((image, i) => (
                <Thumb key={i} onClick={() => setCurrent(i)} role="button">
                  <GatsbyImage image={image} alt="" />
                </Thumb>
              ))
            : null}
        </Thumbs>
      </>
    );
  }

  return (
    <Image>
      <GatsbyImage image={defaultImage} alt="" />
    </Image>
  );
};

export default Gallery;
