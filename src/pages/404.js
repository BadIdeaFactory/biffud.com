import React from "react";
import styled from "styled-components";

import { Helmet, Layout } from "ui/partials";

const Iframe = styled.iframe`
  overflow: hidden;
  border: 0;
`;

export default function ErrorPage(props) {
  return (
    <>
      <Helmet {...props} title="Error" />
      <Layout {...props}>
        <h1>You'd think there would be something more interesting here.</h1>
        <Iframe
          title="Background music"
          width="1"
          height="1"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/348238181&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </Layout>
    </>
  );
}
