import React from 'react';
import styled from 'styled-components';

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