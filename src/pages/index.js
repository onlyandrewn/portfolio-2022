import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Header from '../components/Header';

export default function IndexPage({ data }) {
  const { title, description, author, imageUrl, url, twitterHandle } = data.site.siteMetadata;
  const imageUrl = getSrc(data.shareImage)

  return (
    <>
      <SEO 
        title={title} 
        description={description}
        author={author}
        image={imageUrl}
        url={url}
        twitterHandle={twitterHandle} 
      />
      <Header />
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
        twitterHandle
      }
    }
    shareImage: file(relativePath: { eq: "header.jpeg "}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`