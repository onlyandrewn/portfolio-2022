import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
	text-align: center;
	background: grey;
	color: #fff;
	padding: 24px;
	padding-top: 32px;
	padding-bottom: 32px;

	p {
		margin: 0;
	}

	.footer__cta {
		text-transform: uppercase;
	}

	.footer__email {
		font-size: 32px;
	}
`;

const Footer = () => {
	return (
		<FooterStyles>
			<p className="footer__cta">Let's connect</p>
			<p className="footer__email">info@andrewnguyen.ca</p>
		</FooterStyles>
	);
}

export default Footer;