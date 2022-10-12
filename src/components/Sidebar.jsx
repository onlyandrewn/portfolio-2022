import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.div`
	border: 1px solid red;
	font-family: "Graphik";
	font-weight: 700;

	.sidebar__group {
		margin-bottom: 24px;

		&.is-active {
			color: #0C65F6;
		}
	}
`;

const Sidebar = () => {
	return (
		<SidebarStyles>
			<div className="sidebar__group group-news-apps is-active">
				<div className="sidebar__list">
					<Link to=""><div className="sidebar__list-item">News apps</div></Link>
				</div>
			</div>

			<div className="sidebar__group group-longform">
				<div className="sidebar__list">
					<Link to=""><div className="sidebar__list-item">Longform</div></Link>
				</div>
			</div>

			<div className="sidebar__group group-special-presentation">
				<div className="sidebar__list">
					<Link to=""><div className="sidebar__list-item">Interactives</div></Link>
				</div>
			</div>

			<div className="sidebar__group group-interactives">
				<div className="sidebar__list">
					<Link to=""><div className="sidebar__list-item">Reporting</div></Link>
				</div>
			</div>

			<div className="sidebar__group group-reporting">
				<div className="sidebar__list">
					<Link to=""><div className="sidebar__list-item">Other</div></Link>
				</div>
			</div>
		</SidebarStyles>
	);
};

export default Sidebar;