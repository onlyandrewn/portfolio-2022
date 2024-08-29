import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FaTwitter, FaMastodon, FaGithub, FaGithubAlt } from 'react-icons/fa';

const FooterStyles = styled.footer`
	text-align: center;
	background: #000;
	color: #fff;
	padding: 24px;
	padding-top: 32px;
	padding-bottom: 32px;

	p {
		margin: 0;
	}

	.footer__cta {
		text-transform: uppercase;
		font-family: "Graphik";
		font-weight: 700;
		font-size: 14px; // Switch to rem
		margin-bottom: 16px;
	}

	.footer__link {
		text-decoration: none;
	}

	.footer__email {
		font-size: 32px; // Switch to rem
		font-family: "Tiempos Headline";
		font-weight: 700;
		color: #fff;
		text-decoration: none;
		border-bo

		&:visited {
			color: #fff;
		}
	}
`;

export default function Footer() {
	return (
		<FooterStyles>
			<p className="footer__cta">Let's connect</p>
			<a href="footer__link">info@andrewnguyen.ca</a>

			<Link to="/"><FaTwitter/> Twitter</Link>
			<Link to="/"><FaMastodon/> Threads</Link>
			<Link to="/"><FaGithub/> Github</Link>

			<p>&copy; Andrew Nguyen { new Date().getFullYear() }</p>
		</FooterStyles>
	);
}