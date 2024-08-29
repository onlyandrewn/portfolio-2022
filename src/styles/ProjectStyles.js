import styled from "styled-components";

const ProjectStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 48px;
	grid-column-gap: 48px;
	margin: 48px;

	.project {
		border: 2px solid transparent;
		border-radius: 3px;
		// padding: 8px;

		// &:hover,
		// &:focus {
		// 	border: 2px solid #0C65F6;
		// 	// cursor: pointer;
		// }
	}
	
	// .project__type {
	// 	font-family: "Graphik";
	// 	margin: 0;
	// 	margin-bottom: 16px;
	// 	font-size: 12px;
	// 	text-transform: uppercase;
	// 	color: #0C65F6;
	// 	font-weight: 700;
	// }

	.project__image {
		background: #ddd;
		height: 250px;
	}

	.project__name-wrapper {

	}

	.project__name {
		font-family: "Tiempos Headline";
		font-weight: 700;
		font-size: 32px;
		margin: 0;
		// color: #0C65F6;
		display: inline;
		text-decoration: none;
	}

	.project__desc {
		font-family: "Tiempos Text";
		line-height: 1.5;
	}

	.project__link {
		font-family: "Graphik Bold";
		font-weight: 700;
		
		text-transform: uppercase;
		font-size: 12px;
		text-decoration: none;
		padding-bottom: 2px;
		color: #000;
		border-bottom: 2px solid #000;

		&:hover {
			color: #0074D9;
			border-bottom: 2px solid #0C65F6;
		}
	}

	.project__info {
		margin: 0;
	}

	.project__publication,
	.project__date {
		font-weight: 400;
		font-size: 14px;
		display: block;
		
	}

	.project__publication {
		font-family: "Graphik Bold";
		margin-bottom: 12px;
		margin-top: 24px;
		font-weight: 700;
		font-size: 12px;
		text-transform: uppercase;
	}

	.project__date {
		// font-family: "Tiempos Text";
		font-family: "Graphik Regular";
		margin: 0;
		margin-top: 8px;
		// font-style: italic;
	}

	.project__accolade {
		font-family: "Graphik Regular";
		font-weight: 700;
		font-size: 14px;
	}

	.project__id {
		display: none;
	}

	.project__label {
		background: #000;
		color: #fff;
		font-family: "Graphik Bold";
		font-weight: 700;
		font-size: 10px;
		text-transform: uppercase;
		padding: 8px;
		padding-right: 8px;
		padding-left: 8px;
		border-radius: 3px;
		// max-width: 35px;
		position: relative;
		top: 12px;
		left: 12px;
		max-width: 25%;
		width: 100%;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		margin: 36px;
		grid-row-gap: 36px;

		// .project__desc {
		// 	margin-bottom: 16px;
		// }
	}
`;

export default ProjectStyles