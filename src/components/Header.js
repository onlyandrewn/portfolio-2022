import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Button from '../components/Button';
import { FaCheckCircle } from 'react-icons/fa';

const HeaderStyles = styled.header`
	h1 {
		margin: 0;
		margin-top: 24px;
		margin-bottom: 24px;
		color: #fff;
		font-size: 60px;
		line-height: 1;
	}

	color: #fff;
	// padding: 48px;
	// padding-top: 48px;
	// padding-bottom: 48px;
	background: #000;
	// height: calc(100vh - 175px);
	height: calc(100vh - 79.8px);
	position: relative;

	.header__info {
		position: absolute;
    	bottom: 4%;
    	padding-left: 24px;
    	width: 45%;
		// height: calc(100vh - 79.8px);
		z-index: 100;
	}

	.header__desc {
		margin-bottom: 20px;
		padding-bottom: 5px;
		// padding-left: 15px;
		max-width: 500px;
		width: 88%;
		color: #fff;
		font-weight: 300;
		font-size: 22px;
		font-family: Graphik-Regular;
		line-height: 1.3;
	}

	.header__availability {
		display: flex;
		align-content: center;
		padding-top: 0;
		padding-bottom: 16px;
	}

	.header__availability-text {
		font-size: 16px;
		font-family: Graphik-Regular;
	}

	.header__circle {
		font-size: 16px;
		margin-right: 6px;
	}

	p {
		margin: 0;
		font-size: 24px;
		max-width: 600px;
		font-family: "Graphik Light";
		font-weight: 300;
		max-width: 500px;
	}

	.photo__credit {
	    color: #fff;
    	position: absolute;
    	// float: right;
    	// bottom: 16px;
		bottom: 4%;
    	right: 24px;
		font-family: "Graphik Light";
		display: inline-block;
		// margin-left: 12px;
		// padding: 3px;
		// padding-right: 6px;
		// padding-left: 6px;
		// border-radius: 3px;
		font-size: 10px;
		z-index: 100;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .4);
		height: calc(100vh - 79.8px);
		// min-height: 100vh;
		width: 100%;
		z-index: 99;
	}

	@media (max-width: 768px) {
		border: 1px solid red;
		padding: 36px;
	}
`;

export default function Header() {

	const data = useStaticQuery(graphql`
		query {
			desktop: file(relativePath: {eq: "header.jpeg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1920) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}	
	`);

	const imageData = data.desktop.childImageSharp.fluid;

	const downloadResume = () => {
		console.log("Download resume");
	}

	return (
		<HeaderStyles>
			<div className="overlay"></div>
			<div className="header__info">
				<h1>Crafting digital experiences</h1>
				<p className="header__desc">Andrew Nguyen is a journalist and developer at the Boston Globe, where he builds news apps and interactives.</p>
				<div className="header__availability">
					<FaCheckCircle className="header__circle"/> 
					<p className="header__availability-text">Available for teaching opportunities</p>
				</div>

				<Button onClick={downloadResume} />
			</div>

			<p className="photo__credit">Photo by Pam Lau</p>
			
			<BackgroundImage
				Tag="div"
				fluid={imageData}
				style={{ height: 'calc(100vh - 79.8px)' }}
			>
			</BackgroundImage>
		</HeaderStyles>
	);
}