import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
	background: var(--black);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 24px; // Previously 48px
	padding-right: 24px; // Previously 48px
	padding-top: 16px;
	padding-bottom: 16px;

	.link {
		margin-right: 48px;
		text-decoration: none;
		color: #fff;
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.25px;
		border-bottom: 2px solid transparent;
		font-family: "Graphik Bold";
		font-weight: 700;
		padding-bottom: 4px;
	}

	.link-about,
	.link-projects {

		&:hover,
		&:focus {
			color: var(--orange);
			border-bottom: 2px solid var(--orange);
		}
	}

	.link-about,
	.link-projects,
	.link-contact {
		font-size: 12px;
	}

	.link-projects {
		margin-right: 24px;
	}

	.link-name {
		font-size: 24px;
		padding: 0;
		border-bottom: none;
		padding: 16px;	
		padding-left: 0;
	}

	.link-contact {
		border-radius: 3px;
		border: 1px solid #fff;
		color: #fff;
		margin-right: 0;
		padding: 16px;

		&:focus,
		&:hover {
			background: var(--orange);
			color: var(--white);
			border: 1px solid var(--orange);
		}
	}

	div {
		display: flex;
		align-items: center;		
	}

	.link__group {
		align-items: baseline;
	}

	.skip {
		color: #fff;
		font-family: "Graphik Bold";
		font-weight: 700;
		border: 1px solid #fff;
		position: absolute;
		top: auto;
		left: -999;
		display: inline-block;
		padding: 16px;
		overflow: hidden;
		z-index: -1;

		&:focus,
		&:active {
			background: #fff;
			color: #000;
			left: auto;
			overflow: auto;
			z-index: 999;
		}
	}

	@media (max-width: 640px) {
		.link-name {
			font-size: 20px;
			margin-right: 16px;
			max-width: 140px;
			padding: 0;
		}
	}

	@media (max-width: 480px) {
		.link-name {
			font-size: 16px;
			margin-right: 0;
			padding-right: 0;
		}
	}

	@media (max-width: 400px) {
		.link-projects {
			margin-right: 24px;
		}
	}

	@media (max-width: 360px) {
		.link-contact {
			border: none;
			padding: 0;
			padding-bottom: 4px;
			border-radius: 0;

			&:focus,
			&:hover {
				background: none;
				color: var(--orange);
				border: none;
				border-bottom: 2px solid var(--orange);
			}
		}
	}

	@media (max-width: 320px) {

	}
`;

export default function Nav() {
	return (
		<NavStyles>
			<Link to="/" className="link link-name">Andrew Nguyen</Link>

			<div className="link__group">
				<Link to="/projects" className="link link-projects">Projects</Link>
				<a href="mailto:info@andrewnguyen.ca" className="link link-contact">Contact</a>
			</div>
		</NavStyles>
	);
};