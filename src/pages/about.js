import React from "react";
import { SEO } from "../components/seo";
import styled from "styled-components";

const IndexPageStyles = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    font-family: "Graphik Regular";
    font-size: 20px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default function IndexPage() {
  return (
    <IndexPageStyles>

      <div className="about__image">Image</div>

      <div className="about__text">
        <p>Andrew Nguyen is a newsroom developer for the Boston Globe.</p>
        
        <p>He specializes in creating data visualizations such as charts, maps, apps and other special presentations to help readers better understand and engage with our stories. Andrew is also adept at scraping, data analysis and cleaning large datasets.</p>
        
        <p>His work as both a journalist and developer puts him at the intersection of data, design and code. Since joining the Globe in 2020, he has worked on stories from poverty and housing to congressional spending and the pandemic.</p>
        
        <p>Andrew has also contributed to several notable projects, including the “Future-proofing the presidency” series, which was a finalist for a Pulitzer Prize and was part of the team that launched the Emancipator, a reimagining of the first abolitionist newspaper in the United States.</p>
        
        <p>The Toronto-native has worked in journalism for more than a decade for various newsrooms in Canada and the United States as a reporter, web editor and fact checker. He has a passion for stories about the environment.</p>
        
        <p>Andrew is a graduate of Carleton University in Ottawa, Canada. Most recently, he completed Columbia University’s Lede Program.</p>

        <p>You can reach him at info@andrewnguyen.ca. Or you can follow him on Twitter at @onlyandrewn.</p>
      </div>
    </IndexPageStyles>
  )
}

export const Head = () => (
  <SEO />
)

