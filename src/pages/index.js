import * as React from "react"
import styled from "styled-components";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';

import '../styles/base.scss';

const Updated = styled.div`
  font-family: "Graphik";
  font-size: 14px;
  // font-style: italic;
  margin-left: 24px;
  margin-top: 24px;
  margin-bottom: 0;

  span {
    // font-weight: 700;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Header />

      <Updated>
        <p className="last__updated">Last updated on <span>November 1, 2022</span></p>
      </Updated>

      <div className="group">
        <Sidebar />
        <Projects />
      </div>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
