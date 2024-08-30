import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
	background: var(--black);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 48px;
	padding-right: 48px;
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
			border-bottom: 2px solid var(--white);
		}
	}

	.link-about,
	.link-projects,
	.link-contact {
		font-size: 12px;
	}

	// .link-about,
	// .link-projects {
	// 	position: relative;
	// 	top: 3px;
	// }

	.link-projects {
		margin-right: 32px;
	}

	.link-name {
		font-size: 24px;
		padding: 0;
		border-bottom: none;
	}

	.link-contact {
		border-radius: 3px;
		border: 1px solid #fff;
		color: #fff;
		// margin-left: 16px;
		margin-right: 0;
		padding: 16px;

		&:focus,
		&:hover {
			background: var(--white);
			color: #000;
		}
	}

	div {
		display: flex;
		align-items: center;		
	}

	.link-name {
		padding-left: 0;
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

	&[aria-current="page"] {
		color: red;
	}

	@media (max-width: 768px) {
		padding-left: 36px;
		padding-right: 36px;

		.link-name {
			font-size: 20px;
		}
	}
`;

export default function Nav() {
	return (
		<NavStyles>
			<Link to="#main" className="skip" tabIndex="-1">Skip to main content</Link>
			<Link to="/" className="link link-name">Andrew Nguyen</Link>

			<div className="link__group">
				<Link to="/about" className="link link-about">About</Link>
				<Link to="/projects" className="link link-projects">Projects</Link>
				<a href="mailto:info@andrewnguyen.ca" className="link link-contact">Contact</a>
			</div>
		</NavStyles>
	);
};