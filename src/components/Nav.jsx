import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
	background: #EDF4FF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 24px;
	padding-right: 24px;

	.link {
		text-decoration: none;
		color: #000;
		color: #0C65F6;
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		padding: 24px;
		letter-spacing: 0.25px;
	}

	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	p {
		list-style-type: none;
		text-decoration: none;
		font-family: "Graphik Bold";
		font-weight: 700;
		text-align: center;
		margin: 0;
	}

	.link-name {
		padding-left: 0;
	}

	.link-contact {
		padding-right: 0;
	}
`;

const Nav = () => {
	return (
		<NavStyles>
			<Link to="/" className="link link-name"><p>Andrew Nguyen</p></Link>

			<div>
				<Link to="about" className="link link-about"><p className="about">About</p></Link>
				<Link to="projects" className="link link-projects"><p className="projects">Projects</p></Link>
				<Link to="contact" className="link link-contact"><p className="contact">Contact</p></Link>
			</div>
		</NavStyles>
	);
};

export default Nav;