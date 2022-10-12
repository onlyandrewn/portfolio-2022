import React from 'react';
import styled from 'styled-components';

const CTAStyles = styled.div`
	border: 1px solid red;
`;

const CTA = () => {
	return (
		<CTAStyles>
			<p>Interested in working together</p>
			<p>Work with me</p>
			<p>Let's collaborate</p>
		</CTAStyles>
	);
};

export default CTA;