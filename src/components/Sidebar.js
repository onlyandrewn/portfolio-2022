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
	}

	ul li {
		list-style-type: none;
		padding-bottom: 16px;
	}

	.sidebar__group {
		margin-bottom: 24px;

		&.is-active {
			color: var(--orange);
		}
	}

	.sidebar__link {
		font-size: 16px;
		text-decoration: none;
		color: #000;

		&:visited {
			color: #000;
		}

		&:hover {
			text-decoration: underline;
			color: var(--orange);
		}
	}

	@media (max-width: 1024px) {
		display: none;
	}
`;

export default function Sidebar() {
	return (
		<SidebarStyles>
			<ul>
				<li><AnchorLink to="#special-presentation" className="sidebar__link">Special presentation</AnchorLink></li>
				<li><AnchorLink to="#interactive-graphics" className="sidebar__link">Interactive graphics</AnchorLink></li>
				<li><AnchorLink to="#news-apps-databases" className="sidebar__link">News apps / databases</AnchorLink></li>
			</ul>
		</SidebarStyles>
	);
};