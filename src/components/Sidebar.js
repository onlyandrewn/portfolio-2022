import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';

const SidebarStyles = styled.aside`
	font-family: "Graphik";
	font-weight: 700;
	margin-top: 48px;
	margin-left: 48px;
	flex: 2;

	ul {
		margin: 0;
		padding: 0;
		padding-top: 16px;
		// position: fixed;
		// border: 1px solid red;
	}

	ul li {
		list-style-type: none;
		padding-bottom: 16px;
	}

	.sidebar__group {
		margin-bottom: 24px;

		&.is-active {
			color: #0C65F6;
			color: orange;
		}
	}

	.sidebar__link {
		font-size: 16px;
		text-decoration: none;
		// padding: 16px;
		// border: 1px solid transparent;
		// border-radius: 5px;
		// padding-bottom: 4px;

		&:visited {
			color: #000;
		}

		&:hover {
			text-decoration: underline;
		}
		
		// &:focus,
		// &:active {
		// 	color: #0C65F6;
		// 	background: orange;
		// 	color: #000;
		// }
	}

	// .sidebar__list-item {
	// 	&:hover {
	// 		color: #0074D9;
	// 	}
	// }

	@media (max-width: 768px) {
		display: none;
	}
`;

export default function Sidebar() {
	return (
		<SidebarStyles>
			<ul>
				<li><AnchorLink to="#news-app-database" className="sidebar__link">News apps / databases</AnchorLink></li>
				<li><AnchorLink to="#special-presentation" className="sidebar__link">Special presentation</AnchorLink></li>
				<li><AnchorLink to="#interactive" className="sidebar__link">Interactive</AnchorLink></li>
			</ul>
		</SidebarStyles>
	);
};