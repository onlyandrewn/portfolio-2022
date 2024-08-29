import React from "react";
import { SEO } from "../components/seo";

import Header from '../components/Header';

export default function IndexPage() {
  return (
    <>
      <Header />
    </>
  )
}

export const Head = () => (
  <SEO />
)
