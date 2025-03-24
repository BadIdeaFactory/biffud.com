import React, { useEffect, useState } from "react";
import { graphql, type PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Body, Header, Helmet, Layout } from "ui/partials";
import { Copy, Tile } from "ui/components";

const BlogPostReadTimer = () => {
  const [readingTime, setReadingTime] = useState<number>(Math.random() * 300);

  function tick() {
    setReadingTime((previous) => previous + Math.random() * 15 - 4);
  }

  useEffect(() => {
    let timer: number;
    if (typeof window !== "undefined") {
      timer = window.setInterval(tick, 3000);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.clearInterval(timer);
      }
    };
  }, []);

  return <span>{readingTime.toFixed(2)}</span>;
};

const BlogPostTpl = ({
  data,
  ...props
}: PageProps<Queries.BlogPostsByUIDQuery>) => {
  const blogPost = data.markdownRemark;
  const { frontmatter, html } = blogPost ?? {};
  const { cover, date, title } = frontmatter ?? {};

  return (
    <>
      <Helmet {...props} title={title ?? ""} />
      <Layout {...props}>
        <Header>
          <span className="small">
            Reading Time: <BlogPostReadTimer /> seconds
          </span>
          <h1 className="hero">{title}</h1>
          <span className="small">{date}</span>
        </Header>
        <Body
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "900px",
          }}
        >
          {cover?.childImageSharp?.gatsbyImageData ? (
            <GatsbyImage
              image={cover.childImageSharp.gatsbyImageData}
              alt={title ?? ""}
            />
          ) : null}
          <Tile space="h">
            <Copy dangerouslySetInnerHTML={{ __html: html ?? "" }} />
          </Tile>
        </Body>
      </Layout>
    </>
  );
};

export default BlogPostTpl;

export const pageQuery = graphql`
  query BlogPostsByUID($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      html
      frontmatter {
        uid
        date(formatString: "MMMM DD, YYYY")
        title
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 900
              quality: 90
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
