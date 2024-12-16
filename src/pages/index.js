import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Header from '../components/Header';

export default function IndexPage({ data }) {
  const { title, description, author, image, url, twitterHandle } = data.site.siteMetadata;

  return (
    <>
      <SEO 
        title={title} 
        description={description}
        author={author}
        image={`${url}${image}`}
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
  }
`;