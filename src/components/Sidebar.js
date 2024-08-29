import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`
	font-family: "Graphik";
	font-weight: 700;

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
		padding: 16px;
		border: 1px solid transparent;
		border-radius: 5px;

		&:visited {
			color: #000;
		}

		&:hover {
			color: orange;
			border: 1px solid orange;
		}
		
		&:focus,
		&:active {
			color: #0C65F6;
			background: orange;
			color: #000;
		}
	}

	.sidebar__list-item {
		&:hover {
			color: #0074D9;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

// is active, is not active

export default function Sidebar() {
	// const [isActive, setActive] = useState("false");

	// const ToggleClass = () => {
	// 	setActive(!isActive);
	// }

	// scrollToSection

	return (
		<SidebarStyles>
			<div onClick="" className="sidebar__group group-news-apps">
				<div className="sidebar__list">
					<Link to="" onClick="" className="sidebar__link">News apps</Link>
				</div>
			</div>

			<div onClick="" className="sidebar__group group-longform">
				<div className="sidebar__list">
					<Link to="" onClick="" className="sidebar__link">Longform</Link>
				</div>
			</div>

			<div onClick="" className="sidebar__group group-special-presentation">
				<div className="sidebar__list">
					<Link to="" onClick="" className="sidebar__link">Interactives</Link>
				</div>
			</div>

			<div onClick="" className="sidebar__group group-interactives">
				<div className="sidebar__list">
					<Link to="" onClick="" className="sidebar__link">Reporting</Link>
				</div>
			</div>

			<div onClick="" className="sidebar__group group-reporting">
				<div className="sidebar__list">
					<Link to="" onClick="" className="sidebar__link">Other</Link>
				</div>
			</div>
		</SidebarStyles>
	);
};