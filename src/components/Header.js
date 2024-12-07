import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Button from '../components/Button';
import { FaCheckCircle } from 'react-icons/fa';

const HeaderStyles = styled.header`
	h1 {
		margin: 0;
	}

	color: #fff;
	// padding: 48px;
	// padding-top: 48px;
	// padding-bottom: 48px;
	background: #000;
	height: calc(100vh - 175px);
	position: relative;

	.header__info {
		// border: 1px solid red;
		// position: absolute;
		// bottom: 32px;
		// left: 32px;
	}

	.header__desc {
		margin-bottom: 24px;
	}

	.header__availability {
		font-size: 16px;
		display: flex;
		align-content: center;
		display: none;
	}

	p {
		margin: 0;
		font-size: 24px;
		max-width: 600px;
		font-family: "Graphik Light";
		font-weight: 300;
		max-width: 500px;
		line-height: 1.3;
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

	return (
		<HeaderStyles>
			<BackgroundImage
				Tag="div"
				fluid={imageData}
				style={{ height: 'calc(100vh - 79.8px)' }}
			>
			<div className="header__info">
				<h1>Crafting digital experiences</h1>
				<p className="header__desc">Andrew Nguyen is a journalist and developer at the Boston Globe, where he builds news apps and interactives.</p>
				<p className="header__availability">
					<FaCheckCircle style={{"marginRight": "6px"}}/> Available for teaching opportunities
				</p>
				<Button />
			</div>
			</BackgroundImage>
		</HeaderStyles>
	);
}