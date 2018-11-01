import { graphql } from "gatsby";
import React from "react";

import { PeopleTpl } from "ui/templates";

export default props => <PeopleTpl {...props} />;

export const pageQuery = graphql`
  query AllMembersQuery {
    advisors: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { advisor: { eq: true } } } }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              advisor
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    corporate: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { corporate: { eq: true } } } }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              corporate
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    elected: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { elected: { eq: true } } } }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              elected
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    members: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { member: { eq: true } } } }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              member
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    minions: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" }
        frontmatter: { role: { elemMatch: { minion: { eq: true } } } }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              minion
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  cropFocus: CENTER
                  duotone: {
                    highlight: "#ffffff"
                    shadow: "#000000"
                    opacity: 100
                  }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
