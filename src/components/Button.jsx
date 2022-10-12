import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.div`
	border: 1px solid red;
`;

const Button = () => {
	return (
		<ButtonStyles>
			<button>Download resume</button>
			<button>Download press kit</button>
			<button>Learn more</button>
			<button>Get in touch</button>
			<button>Schedule a chat</button>
		</ButtonStyles>
	);
};

export default Button;