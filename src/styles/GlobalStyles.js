import { createGlobalStyle } from 'styled-components';
// import bg from "../assets/images/bg.svg"
// import stripes from "../assets/images/stripes.svg"

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #000000;
        --white: #FFFFFF;
        --red: red;
        --blue: #0C65F6
    }

	button {
		padding: 16px;
		padding-left: 24px;
		padding-right: 24px;
		font-weight: 700;
		background: #000;
		color: var(--white);
		border: 1px solid var(--white);
		border-radius: 3px;
		font-family: "Graphik";
		cursor: pointer;

		&:focus {
			background: var(--blue);
			color: var(--white);
		}
	}

    // Blur images for lazy loading
    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles;