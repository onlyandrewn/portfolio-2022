import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;
	border-radius: 3px;
	border: 1px solid #fff;
	padding: 16px;
	font-family: "Graphik Bold";

	&:visited {
		color: #fff;
	}
`;

export default function Button() {
	return (
		<ButtonStyles>
			Download resume
		</ButtonStyles>
	);
};