import React from 'react';
import styled from 'styled-components';

const DropdownStyles = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 100;
	width: 100%;
	height: 4px;
	background: var(--orange);
`;

export default function Dropdown() {

	return (
		<DropdownStyles>
		</DropdownStyles>
	);
}