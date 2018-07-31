import { object } from "prop-types";
import Helmet from "react-helmet";
import React from "react";

const SEOWrapper = (props) => {
  const { location } = props;
  return (
    <Helmet
      encodeSpecialCharacters
      meta={[
        { name: "author", content: "Bad Idea Factory — https://biffud.com" },
        { name: "charset", content: "utf-8" },
        { name: "coverage", content: "Worldwide" },
        {
          name: "description",
          content:
            "Bad Idea Factory is a collective of chaotic creatives using technology to make people thinking face emoji."
        },
        { name: "designer", content: "Mogli Studio — https://moglistudio.pl" },
        { name: "distribution", content: "Global" },
        { name: "keywords", content: "bad, idea, factory" },
        { name: "language", content: "en" },
        { name: "owner", content: "Bad Idea Factory — https://biffud.com" },
        { name: "rating", content: "General" },
        { name: "revist-after", content: "after 3 days" },
        { name: "robots", content: "index, follow" },
        { name: "title", content: "Bad Idea Factory" },
        {
          name: "viewport",
          content:
            "width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes, shrink-to-fit=no"
        }
      ]}
      defaultTitle="Bad Idea Factory"
      titleTemplate="%s ⋅ Bad Idea Factory"
    >
      <html lang="en" />

      <title>Bad Idea Factory</title>

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@biffud" />

      {/* Facebook OG */}
      <meta
        property="og:description"
        content="Bad Idea Factory is a collective of chaotic creatives using technology to make people thinking face emoji."
      />
      {/* <meta property="og:image" content={portrait1x} /> */}
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content="Bad Idea Factory" />
      <meta property="og:title" content="Bad Idea Factory" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://biffud.com" />

      {/* <link rel="icon" type="image/x-icon" href={favicon} /> */}
      <link rel="canonical" href={`https://biffud.com${location.pathname}`} />
    </Helmet>
  );
};

SEOWrapper.propTypes = {
  location: object.isRequired
};

SEOWrapper.defaultProps = {};

export default SEOWrapper;
