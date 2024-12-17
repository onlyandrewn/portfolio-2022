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
	background: #000;
	height: calc(100vh - 91.59px);
	// height: calc(100vh - 79.8px);
	position: relative;

	.header__info {
		position: absolute;
    	bottom: 4%;
    	padding-left: 24px;
    	width: 45%;
		z-index: 100;
	}

	.header__desc {
		margin-bottom: 24px;
		padding-bottom: 5px;
		max-width: 500px;
		width: 88%;
		color: #fff;
		font-size: 22px;
		font-family: Graphik-Regular;
		line-height: 1.3;
	}

	.header__availability {
		display: flex;
		align-content: center;
		padding-top: 0;
		padding-bottom: 24px;
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
		bottom: 4%;
    	right: 24px;
		font-family: "Graphik Light";
		display: inline-block;
		font-size: 10px;
		z-index: 100;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .4);
		height: calc(100vh - 91.59px);
		// height: calc(100vh - 79.8px);
		width: 100%;
		z-index: 99;
	}

	@media (max-width: 1024px) {

	}

	@media (max-width: 768px) {

	}

	@media (max-width: 640px) {
		h1 {
			font-size: 48px;
		}

		.header__desc {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {

	}

	@media (max-width: 400px) {
		h1 {
			font-size: 32px;
			margin-bottom: 16px;
		}

		.header__availability,
		.header__availability-text,
		.header__circle,
		.photo__credit {
			display: none;
		}

		.header__desc {
			margin-bottom: 0;
		}

		.header__info {
			width: 100%;
			max-width: none;
		}
	}

	@media (max-width: 360px) {

	}

	@media (max-width: 320px) {
		// h1 {
		// 	font-size: 24px;
		// }
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
			<div className="overlay"></div>
			<div className="header__info">
				<h1>Crafting digital experiences</h1>
				<p className="header__desc">Andrew Nguyen is a journalist and developer at the Boston Globe, where he builds news apps and interactives.</p>
				<div className="header__availability">
					<FaCheckCircle className="header__circle"/> 
					<p className="header__availability-text">Available for teaching opportunities</p>
				</div>

				<a href="resume.pdf" style={{ textDecoration: "none" }}><Button/></a>
			</div>

			<p className="photo__credit">Photo by Pam Lau</p>
			
			<BackgroundImage
				Tag="div"
				fluid={imageData}
				style={{ height: 'calc(100vh - 91.59px)' }}
			>
			</BackgroundImage>
		</HeaderStyles>
	);
}