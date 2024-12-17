import styled from "styled-components";

const ProjectStyles = styled.div`
	.test {
		display: flex;
	}

	.category__header {
		font-family: "Graphik";
		// margin: 0;
		margin-left: 48px;
		margin-right: 48px;
		margin-top: 48px;
		margin-bottom: 24px;
		padding-bottom: 8px;
		padding-top: 16px;
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 700;
		border-bottom: 3px solid #000;
	}

	.category__projects {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		// grid-row-gap: 32px;
		// grid-column-gap: 32px;
		grid-row-gap: 16px;
		grid-column-gap: 16px;
		margin: 48px;
		margin-top: 0;
	}

	.project {
		border: 3px solid transparent;
		border-radius: 3px;
		padding: 16px;
		// padding: 8px;

		&:hover,
		&:focus,
		&:active {
			border: 3px solid #000;
			cursor: pointer;
		}
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

	.project__name {
		font-family: "Tiempos Headline";
		font-weight: 700;
		font-size: 32px;
		margin: 0;
		// color: #0C65F6;
		color: #000;
		display: inline;
		text-decoration: none;

		&:visited {
			color: #000;
		}
	}

	.project__desc {
		font-family: "Tiempos Text";
		line-height: 1.5;
		margin-bottom: 0;
	}

	.project__link {
		text-decoration: none;
		color: #000;

		&:visited {
			color: #000;
		}
		// font-family: "Graphik Bold";
		// font-weight: 700;
		
		// text-transform: uppercase;
		// font-size: 12px;
		// text-decoration: none;
		// padding-bottom: 2px;
		// color: #000;
		// border-bottom: 2px solid #000;

		// &:hover {
		// 	color: #0074D9;
		// 	border-bottom: 2px solid #0C65F6;
		// }
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

	@media (max-width: 1200px) {
		.category__projects {
			grid-template-columns: 1fr 1fr;
			grip-row-gap: 12px;
			grip-column-gap: 12px;
		}
	}

	@media (max-width: 1024px) {

	}

	@media (max-width: 768px) {
		.category__projects {
			grid-template-columns: 1fr;
			margin: 24px;
		}

		.category__header {
			margin-left: 24px;
			margin-right: 24px;
		}
	}

	@media (max-width: 640px) {

	}

	@media (max-width: 480px) {
		.project {
			padding: 12px;
		}

		.project__desc {
			font-size: 16px;
		}

	}

	@media (max-width: 400px) {

	}

	@media (max-width: 360px) {

	}

	@media (max-width: 320px) {

	}
`;

export default ProjectStyles