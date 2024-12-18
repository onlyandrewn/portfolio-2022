import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const ButtonStyles = styled.button`
	font-family: "Graphik Bold";
	text-transform: uppercase;
	position: relative;
    padding: 16px;
    padding-right: 48px;
    padding-left: 48px;
    outline: 0;
    border: 2px solid #f6a302;
    background: #f6a302;
    text-align: left;
    font-size: 12px;
	// background: transparent;
	// border: 2px solid #fff;

	&:hover,
	&:active,
	&:focus {
		border: 2px solid ${darken(0.2, "#f6a302")};
	}

	&:visited {
		color: #fff;
	}

	@media (max-width: 768px) {
		padding-left: 32px;
		padding-right: 32px;
	}

	@media (max-width: 480px) {
		display: none;
	}
`;

export default function Button() {
	return (
		<ButtonStyles>
			Download resume
		</ButtonStyles>
	);
};