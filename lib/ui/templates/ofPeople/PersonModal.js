import { func, object, shape } from "prop-types";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

import { Action, Icon, Modal } from "ui/components";
import { breakpoint, color, time } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Member = props => {
  const { frontmatter } = props.data;
  const { avatar, bio, fname, github, lname, quote, twitter } = frontmatter;
  return (
    <Modal toggleModal={props.toggleModal}>
      <Img fluid={avatar.childImageSharp.fluid} />
      {fname}
      {lname}
      {bio}
      {quote}
      {twitter}
      {github}
    </Modal>
  );
};

Member.propTypes = {
  data: shape({
    frontmatter: object.isRequired
  }).isRequired,
  toggleModal: func.isRequired
};

Member.defaultProps = {};

export default Member;
