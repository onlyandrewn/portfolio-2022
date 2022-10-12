import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
	background: darkgrey;
	color: #fff;
	padding: 24px;
	padding-top: 48px;
	padding-bottom: 48px;

	p {
		margin: 0;
		font-size: 20px;
		width: 600px;
		font-family: "Graphik Regular";
		font-weight: 400;
		width: 380px;
	}

	h1 {
		font-family: "Tiempos Headline";
		font-size: 100px;
		margin: 0;
		margin-bottom: 8px;
		width: 500px;
		line-height: 1;
	}
`;

const Header = () => {
	return (
		<HeaderStyles>
			<h1>Telling digital stories</h1>
			<p className="desc"><span>Andrew Nguyen</span> is a journalist and developer at the Boston Globe, where he builds news apps and interactives.</p>
		</HeaderStyles>
	);
}

export default Header;