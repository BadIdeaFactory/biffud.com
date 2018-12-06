import React, { Component } from "react";
import { array, object } from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

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
  transition: box-shadow ${time.s}, transform ${time.s};
  &:hover {
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.actionDecor};
    transform: translate(-1px, -1px);
  }
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  render() {
    const { current } = this.state;
    const { images, defaultImage } = this.props;
    if (images && images.length > 0) {
      return (
        <>
          <Image>
            <Img fluid={images[current]} />
          </Image>
          <Thumbs>
            {images.length > 1
              ? images.map((image, i) => (
                <Thumb
                  key={i}
                  onClick={() => this.setState({ current: i })}
                  role="button"
                >
                  <Img fluid={image} />
                </Thumb>
                ))
              : null}
          </Thumbs>
        </>
      );
    }
    return (
      <Image>
        <Img fluid={defaultImage} />
      </Image>
    );
  }
}

Gallery.propTypes = {
  images: array,
  defaultImage: object.isRequired
};

Gallery.defaultProps = { images: null };

export default Gallery;
