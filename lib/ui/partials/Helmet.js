import { object, string } from "prop-types";
import Helmet from "react-helmet";
import React from "react";

import META from "config/meta";

const CustomHelmet = (props) => {
  const { description, location, keywords, title } = props;
  return (
    <Helmet
      encodeSpecialCharacters
      meta={[
        { name: "designer", content: META.designer },
        { name: "author", content: META.author },
        { name: "owner", content: META.owner },
        { name: "title", content: title || META.defaultTitle },
        {
          name: "description",
          content: description || META.description
        },
        { name: "keywords", content: keywords || META.keywords },
        { name: "charset", content: "utf-8" },
        { name: "coverage", content: "Worldwide" },
        { name: "distribution", content: "Global" },
        { name: "language", content: "en" },
        { name: "rating", content: "General" },
        { name: "revist-after", content: "after 3 days" },
        { name: "robots", content: "index, follow" },
        {
          name: "viewport",
          content:
            "width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes, shrink-to-fit=no"
        }
      ]}
      defaultTitle={title || META.defaultTitle}
      titleTemplate={`%s ⋅ ${META.defaultTitle}`}
    >
      <html lang="en" />

      <title>{title || META.defaultTitle}</title>

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${META.twitterHandle}`} />

      {/* Facebook OG */}
      <meta
        property="og:description"
        content={description || META.description}
      />
      {/* <meta property="og:image" content={portrait1x} /> */}
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={META.siteName} />
      <meta property="og:title" content={META.defaultTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={META.url} />

      {/* <link rel="icon" type="image/x-icon" href={favicon} /> */}
      <link rel="canonical" href={`${META.url}${location.pathname}`} />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  description: string,
  location: object.isRequired,
  keywords: string,
  title: string
};

CustomHelmet.defaultProps = {
  description: null,
  keywords: null,
  title: null
};

export default CustomHelmet;
