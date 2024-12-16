import React from "react";
import SEO from "../components/seo";
import Header from '../components/Header';

export default function IndexPage() {
  return (
    <>
      <SEO 
        title="Andrew Nguyen | Projects"
        description="TKTK"
        image="/header.jpeg"
        url="https://andrewnguyen.ca/projects"
      />

      <Header />
    </>
  );
}